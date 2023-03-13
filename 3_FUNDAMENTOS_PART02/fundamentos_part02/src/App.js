import './App.css';
import TitleSection03 from './components/TitleSectionThree,';
import OnePiece from './imgs/wallpaper-hp-one-piece.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';

function App() {
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
      </div>
    </div>
  );
}

export default App;
