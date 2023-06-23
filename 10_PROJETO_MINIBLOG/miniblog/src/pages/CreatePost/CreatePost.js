import styles from './CreatePost.module.css'
import {useState} from 'react';

const CreatePost = () => {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const contentPost = {
      title,
      image,
      body,
      tags
    }

    console.log(contentPost);
  }

  return (
    <div className={styles.create_post}>

      <h2>Criar post</h2>
      <p>Escreva sobre o que você quiser e compartilhe o seu conhecimento!</p>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input type="text" name='title' required placeholder="Coloque um título para o seu post" onChange={(e) => setTitle(e.target.value)} value={title}/>
        </label>

        <label>
          <span>URL da imagem:</span>
          <input type="text" name='imagem' required placeholder="Cole aqui a URL da imagem" onChange={(e) => setImage(e.target.value)} value={image}/>
        </label>

        <label>
          <span>Conteúdo</span>
          <textarea name="body" placeholder="Descreva seu post" required onChange={(e) => setBody(e.target.value)} value={body}></textarea>
        </label>

        <label>
          <span>Tags</span>
          <input type="text" name='tags' required placeholder="Separe as tags por vírgula" onChange={(e) => setTags(e.target.value)} value={tags}/>
        </label>
        <button className='btn'>Criar</button>
        {/* {!loading && <button className='btn'>Entrar</button>}
        {loading && <button className='btn' disabled>Aguarde...</button>}
        {error && <p className='error'>{error}</p>}
        {sucess && <p className='sucess'>{sucess}</p>} */}
      </form>

    </div>
  )
}

export default CreatePost