/* import { CounterContext } from "../context/CounterContext"
import { useContext } from "react" */
import { useCounterContext } from "../hooks/useCounterContext";

const News = () => {

  const {counter} = useCounterContext();


  return (
    <div>
      <h1>News</h1>
      <p>Valor do Contador: {counter}</p>
    </div>
  )
}

export default News