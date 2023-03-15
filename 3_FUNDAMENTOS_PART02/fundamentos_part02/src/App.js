import './App.css';
import TitleSection03 from './components/TitleSectionThree,';
import OnePiece from './imgs/wallpaper-hp-one-piece.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

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

  const showMessage = () => {
    console.log("Executando função do elemento Pai como uma prop!");
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  /* DESAFIO 04 */
  const people = [
    {id: 1, name: "Luana", age: 20, job: "Estudante"},
    {id: 2, name: "Thasyo", age: 20, job: "Recepcionista"},
    {id: 3, name: "Jennyfer", age: 22, job: "Professora"},
    {id: 4, name: "Cássio", age: 15, job: "Estudante"},
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
            key={car.id}
            brand={car.name}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))}
        {/* FRAGMENTS */}
        <Fragments propsFragment="Teste"/>
        {/* CHILDREN PROP */}
        <Container myValue="Testando prop dentro do children prop">
          <p>Este é o Children Prop</p>
        </Container>
        {/* FUNÇÕES COM PROPS */}
        <ExecuteFunction message={showMessage}/>
        {/* STATE LIFT */}
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/>
        {/* DESAFIO 04 */}
        <h2>DESAFIO 04</h2>
        {people.map((user) => (
          <UserDetails 
            key={user.id}
            name={user.name}
            age={user.age}
            job={user.job}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
