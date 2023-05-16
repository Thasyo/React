import './App.css';

import {useState, useEffect, useRef} from 'react'
import { useFetch } from './hooks/useFetch';

function App() {

  const url = "http://localhost:3000/products";

  const [products, setProducts] = useState([]);

  const {data: items, httpConfig, loading, error} = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const addNewProduct = useRef(null);

  // RESGATANDO DADOS

  /* useEffect(() => {
    async function fetchData(){
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    }

    fetchData();
  }, []); */

  // ADICIONANDO DADOS
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };
    
    /* const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(product)
    });

    //CARREGAMENTO DINÂMICO
    const addedProduct = await res.json();

    setProducts((prevProducts) => [...prevProducts, addedProduct]); */

    // REFATORANDO POST
    httpConfig(product, "POST")

    setName("");
    setPrice("");
    addNewProduct.current.focus();
  }

  //REMOVENDO DADOS
  const handleDelete = (id) => {
    console.log(id);

    httpConfig(id, "DELETE");

  };

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome
          <input type="text" name='name' ref={addNewProduct} value={name} onChange={(e) => setName(e.target.value)}/>
        </label>

        <label>
          Preço
          <input type="number" name='price' value={price} onChange={(e) => setPrice(e.target.value)}/>
        </label>

        {loading && <input type="submit" disabled value="Aguarde" id='btn-disabled'/>}
        {!loading && <input type="submit" value="Criar" id="btn"/>}
      </form>

      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price} <button onClick={() => handleDelete(product.id)} id='btn-delete'>Remover</button>
          </li>
        ))}
      </ul>}
    </div>
  );
}

export default App;
