import './App.css';

import {useState, useEffect, useRef} from 'react'

function App() {

  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const addNewProduct = useRef(null);

  // RESGATANDO DADOS
  const url = "http://localhost:3000/products";

  useEffect(() => {
    async function fetchData(){
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    }

    fetchData();
  }, []);

  // ADICIONANDO DADOS
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };
    
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(product)
    });

    //CARREGAMENTO DINÂMICO
    const addedProduct = await res.json();

    setProducts((prevProducts) => [...prevProducts, addedProduct]);

    setName("");
    setPrice("");
    addNewProduct.current.focus();
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Nome
          <input type="text" name='name' ref={addNewProduct} value={name} onChange={(e) => setName(e.target.value)}/>
        </label>

        <label>
          Preço
          <input type="number" name='price' value={price} onChange={(e) => setPrice(e.target.value)}/>
        </label>

        <input type="submit" value="Criar" id="btn"/>
      </form>
    </div>
  );
}

export default App;
