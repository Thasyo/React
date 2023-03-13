import {useState} from 'react'

const ConditionalRender = () => {
    const [x] = useState(true)

    const [name, setName] = useState("Thasyo")
  
    return (
    <div>
        <h2>Isso será exibido?</h2>
        {x && <p>Se for true, sim.</p>} 
        {!x && <p>Se for false, não.</p>}

        <h2>IF Ternário</h2>
        {name === "Thasyo" ? (
            <div>
                <p>Seu nome é: {name}!</p>
            </div>
        ) : (
            <div>
                <p>Agora o seu nome é: {name}!</p>
            </div>
        )}
        <button onClick={() => setName("Luana")}>Mudar nome</button>
    </div>
  )
}

export default ConditionalRender;