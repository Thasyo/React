import { useParams } from "react-router-dom"

const Info = () => {

    const {id} = useParams();

  return (
    <div>
        <p>Apresentando informações sobre o produto: {id}</p>
    </div>
  )
}

export default Info