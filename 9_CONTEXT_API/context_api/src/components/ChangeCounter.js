//3- ALTERANDO CONTEXTO
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"


const ChangeCounter = () => {

    const {counter, setCounter} = useContext(CounterContext);

    return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>Adicionar</button>
    </div>
  )
}

export default ChangeCounter