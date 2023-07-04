import {useState} from 'react'

const HookUseState = () => {

    //1- useState
    let userName = "Thasyo";
    const [name, setName] = useState('Luana')

    const changeNames = () => {
        userName = "Thasyo Peres"
        setName("Luana Peres")
        console.log(userName)
        console.log(name)
    }

    console.log(name)

    //2- useState e inputs
    const [age, setAge] = useState(18)

    const handleSubmit = (e) => {
        e.preventDefault()

        //envio a "api"
        console.log(age)
    }

  return (
    <div>
        {/* 1- useState */}
        <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Alterar</button>
        {/* 2- useState e Inputs */}
        <p>Digite a sua idade</p>
        <form onSubmit={handleSubmit}>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
            <button>Enviar</button>
        </form>
        <p>Você tem {age} anos.</p>
    </div>
  )
}

export default HookUseState