import './Game.css';
import {useState, useRef} from "react";

const Game = ({verifyLetter, score, pickedCategory, pickedWord, letters, guessedLetters, wrongLetters, guesses}) => {
  
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus();
  }

  return (
    <div className='game'>

      <div className='score'>
        <h2>Pontuação: <span>{score}</span></h2>
      </div>

      <div className='title-start-game'>
        <h1>Advinhe a palavra</h1>
        <h3>Dica: <span>{pickedCategory}</span></h3>
        <h3>Você tem <span>{guesses}</span> tentativa(s)</h3>
      </div>

      <div className='words-container'>
        {letters.map((letter, i) => (
          guessedLetters.includes(letter) ? (
            <span key={i} className='letter'>{letter}</span>
          ) : (
            <span key={i} className='blank-square'></span>
          )
        ))}
      </div>

      <div className="letter-container">
        <p>Escolha uma letra:</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name='letter' 
            maxLength='1' 
            required 
            onChange={(e) => setLetter(e.target.value)} 
            value={letter}
            ref={letterInputRef}
          />
          <button>Jogar!</button>
        </form>
      </div>

      <div className="wrong-letters">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>

    </div>
  )
}

export default Game