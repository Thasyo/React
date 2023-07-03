import styles from './EditPost.module.css'
import {useState, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom"
import {useAuthValue} from "../../context/AuthContext"
import { useUpdateDocument } from '../../hooks/useUpdateDoc';
import {useFetchDocument} from "../../hooks/useFetchDocument"


const EditPost = () => {
  const {id} = useParams();
  const {document: post} = useFetchDocument("posts", id);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if(post) {
        setTitle(post.title);
        setBody(post.body);
        setImage(post.image);
        
        
        const textTags = post.tagsArray.join(", ");

        setTags(textTags);
    }
  }, [post])

  const navigate = useNavigate();

  const {user} = useAuthValue()

  const {updateDocument, response} = useUpdateDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    //validar url da imagem
    try {
      new URL(image)
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.")
    }

    //criar o array de tags
    const tagsArray = tags.split(",").map((tag) => (
      tag.trim().toLowerCase()
    ))

    //checar todos os valores
    if(!title || !image || !tags || !body){
      setFormError("Por favor, preencha todos os campos!");
    }

    if(formError){
      return;
    }

    //inserindo post no bd.

    const data = {
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    }

    updateDocument(id, data);

    //redirecionar para a página inicial.
    navigate("/dashboard");

  };

  return (
    <div className={styles.edit_post}>

      {post && (
        <>
            <h2>Editand post: {post.title}</h2>
            <p>Altere os dados do post como você desejar!</p>
  
            <form onSubmit={handleSubmit}>
            <label>
                <span>Título:</span>
                <input type="text" name='title' required placeholder="Coloque um título para o seu post" onChange={(e) => setTitle(e.target.value)} value={title}/>
            </label>
  
            <label>
                <span>URL da imagem:</span>
                <input type="text" name='imagem' required placeholder="Cole aqui a URL da imagem" onChange={(e) => setImage(e.target.value)} value={image}/>
            </label>

            <p className={styles.preview_title}>Preview da Imagem Atual:</p>
            <img src={post.image} alt={post.title} className={styles.preview_img}/>
  
            <label>
                <span>Conteúdo</span>
                <textarea name="body" placeholder="Descreva seu post" required onChange={(e) => setBody(e.target.value)} value={body}></textarea>
            </label>
    
            <label>
                <span>Tags</span>
                <input type="text" name='tags' required placeholder="Separe as tags por vírgula" onChange={(e) => setTags(e.target.value)} value={tags}/>
            </label>
    
            {!response.loading && <button className='btn'>Editar</button>}
            {response.loading && <button className='btn' disabled>Aguarde...</button>}
            {response.error && <p className='error'>{response.error}</p>}
            {formError && <p className='error'>{formError}</p>}
    
            </form>
        </>
      )}

    </div>
  )
}

export default EditPost