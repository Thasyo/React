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

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  //função para escolher palavra e categoria.
  const pickedWordAndCategory = () => {
    //escolhendo aleatoriamente a categoria da palavra.
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    //escolhendo aleatoriamente a palavra.
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category};

  }

  //função responsável para iniciar o jogo 
  const startGame = () => {
    //atribuindo a duas variáveis o return da função.
    const {word, category} = pickedWordAndCategory();
    console.log(word, category);

    //criando um array de letras.
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((lt) => lt.toLowerCase());
    console.log(wordLetters);

    //fill states.
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters);

    setGameStage(stages[1].name);
  }

  //função fictícia para finalizar jogo
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  } 

  //função para resetar jogo.
  const resetGame = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === 'home' && <HomePage startGame={startGame}/>}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
      {gameStage === 'end' && <End resetGame={resetGame}/>}
    </div>
  );
}

export default App;
