//CSS
import './App.css';

//COMPONENTS
import HomePage from './components/HomePage.js';
import Game from './components/Game';
import End from './components/End';

//REACT
import {useEffect, useCallback, useState} from 'react';

//DATA
import { wordsList } from './data/words';

//criando os estágios de cada parte do jogos (páginas existentes do jogo)
const stages = [
  {id: 1, name: 'home'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);

  const [words] = useState(wordsList);

  return (
    <div className="App">
      {gameStage === 'home' && <HomePage/>}
      {gameStage === 'game' && <Game/>}
      {gameStage === '' && <End/>}
    </div>
  );
}

export default App;
