/* import { CounterContext } from "../context/CounterContext"
import { useContext } from "react" */
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";


const News = () => {

  const {counter} = useCounterContext();

  const {color} = useTitleColorContext();

  return (
    <div>
      <h1 style={{color: color}}>News</h1>
      <p>Valor do Contador: {counter}</p>
    </div>
  )
}

export default News