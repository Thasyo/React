import { useParams } from "react-router-dom";
import {useFetch} from "../hooks/useFetch";

const Product = () => {

    //ROTAS DINÂMICAS
    const {id} = useParams();

    //CARREGAMENTO INDIVIDUAL DE DADOS COM BASE NAS ROTAS DINÂMICAS
    const url = `http://localhost:3000/products/${id}`;

    const {data: product, loading, error} = useFetch(url);

  return (
    <>
      {error && <p>Ocorreu um erro...</p>}      
      {loading && <p>Carregando...</p>}   
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R$ {product.price}</p>
        </div>
      )}
    </>
  )
}

export default Product