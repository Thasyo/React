import './App.css';
import TitleSection03 from './components/TitleSectionThree,';
import OnePiece from './imgs/wallpaper-hp-one-piece.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';

function App() {

  const lastNameOne = "Peres";

  const [lastNameTwo] = useState("Leite");

  const cars = [
    {id: 1, name: "KWID", color: "CINZA", km: 12123, newCar: false},
    {id: 2, name: "FOX", color: "PRETA", km: 0, newCar: true},
    {id: 3, name: "FERRARI", color: "VERMELHA", km: 347632, newCar: false},
    {id: 4, name: "GOL", color: "VERDE", km: 0, newCar: true},
    {id: 5, name: "PULSE", color: "AMARELO", km: 98273, newCar: false},
  ];

  return (
    <div className="App">
      <TitleSection03/>
      {/* IMAGEM EM PUBLIC - PODEMOS ACESSÁ-LA DIRETAMENTE*/}
      <div>
        <img src="/naruto-shippuden-papel-de-parede-2048x1152_49.jpg" alt="naruto" width="500px"/>
      </div>

      {/* IMAGEM EM UMA PASTA ESPECÍFICA */}
      <div>
        <img src={OnePiece} alt="One Piece" width="500px"/>
      </div>

      <div>
        <ManageData/>
        <ListRender/>
        <ConditionalRender/>
        {/* props */}
        <ShowUserName firstName="Thasyo" lastNameOne={lastNameOne} lastNameTwo={lastNameTwo}/>
        {/* desestruturando as props */}
        <CarDetails brand="FOX" color="PRETA" km={12457} newCar={false}/>
        {/* REAPROVEITANDO COMPONENTES */}
        <CarDetails brand="GOL" color="VERMELHO" km={0} newCar={true}/>
        <CarDetails brand="PORSHE" color="BRANCA" km={50} newCar={false}/>
        {/* RENDERIZAÇÃO COM LOOP */}
        {cars.map((car) => (
          <CarDetails 
            brand={car.name}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))}
      
      
      </div>
    </div>
  );
}

export default App;
