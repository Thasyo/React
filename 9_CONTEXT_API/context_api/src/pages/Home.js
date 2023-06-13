/* import { useContext } from "react"
import {CounterContext} from "../context/CounterContext" */
import ChangeCounter from "../components/ChangeCounter";

//4- Refatornado context
import { useCounterContext } from "../hooks/useCounterContext";

//5- Context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";


const Home = () => {

  const {counter} = useCounterContext();
  const {color, dispatch} = useTitleColorContext();

  //alterando contexto mais complexo
  const setTitleColor = (color) => {
    dispatch({type: color});
  }

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do Contador: {counter}</p>
      {/* 3- Alterando contexto */}
      <ChangeCounter/>
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home