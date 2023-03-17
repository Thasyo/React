import './MyForm.css'
import {useState} from 'react';

const MyForm = ({user}) => {

    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');
    const [role, setRole] = useState(user ? user.role : '');


    const handleName = (e) => {
        setName(e.target.value); //uma das formas de resgatar o valor atual do input.
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //evitar o reload da pag com submit.
        console.log("enviando formulário");
        console.log(name);
        console.log(email);
        console.log(bio);
        console.log(role);

        //validação

        //envio

        setName("")
        setEmail("")
        setBio("")
        setRole("")
    }

  return (
    <div>
        {/* ENVIO DE FORM - ONSUBMIT */}
        {/* 1 - CRIANDO O FORM */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name}/>
            </div>
            {/* 2 - LABEL ENVOLVENDO INPUT =:> "DOCUMENTAÇÃO DO REACT ACONSELHA FAZER OS INPUTS DESSA FORM"*/}
            <label>
                <span>E-mail:</span>                                               {/* outra forma de pegar o valor atual do input  */}
                <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder='Conte-nos um pouco sobre você...' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            <label>
                <span>Cargo:</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="estagiario">Estagiário</option>
                    <option value="junior">Júnior</option>
                    <option value="pleno">Pleno</option>
                    <option value="senior">Senior</option>
                </select>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm