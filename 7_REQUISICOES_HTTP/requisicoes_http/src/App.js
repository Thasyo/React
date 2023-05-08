import './App.css';

import {useState, useEffect} from 'react'

function App() {

  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

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
  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    }
    
    const newData = async () => {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      console.log(res)
      console.log(product)
    }

    newData();
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
      <form onClick={handleSubmit}>
        <label>
          Nome
          <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)}/>
        </label>

        <label>
          Preço
          <input type="text" name='price' value={price} onChange={(e) => setPrice(e.target.value)}/>
        </label>

        <input type="submit" value="Criar" id="btn"/>
      </form>
    </div>
  );
}

export default App;
