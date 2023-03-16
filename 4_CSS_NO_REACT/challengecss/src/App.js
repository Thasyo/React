import './App.css';
import CarDetails from './components/CarDetails.js';

function App() {

  const cars = [
    {id: 1, brand: "Ferrari", color: "red", km: 0},
    {id: 2, brand: "Renault", color: "white", km: 3421},
    {id: 3, brand: "Ford", color: "Orange", km: 7654},
  ]

  return (
    <div className="App">
      <h1>Título no App.js</h1>
      <h2>Lista de Carros</h2>
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
    </div>
  );
}

export default App;
