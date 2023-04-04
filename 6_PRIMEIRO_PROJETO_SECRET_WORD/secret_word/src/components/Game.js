import './Game.css'

const Game = ({verifyLetter}) => {
  return (
    <div className='game'>

      <div className='score'>
        <h2>Pontuação: <span>0000</span></h2>
      </div>

      <div className='title-start-game'>
        <h1>Advinhe a palavra</h1>
        <h3>Dica: <span>dica...</span></h3>
      </div>

      <div className='words-container'>
        <span className='letter'>A</span>
        <span className='blank-square'></span>
      </div>

      <div className="letter-container">
        <p>Escolha uma letra:</p>
        <form>
          <input type="text" name='letter' maxLength='1' required/>
          <button>Jogar!</button>
        </form>
      </div>

      <div className="wrong-letters">
        <p>Letras já utilizadas:</p>
        <span>a, b, ..</span>
      </div>

    </div>
  )
}

export default Game