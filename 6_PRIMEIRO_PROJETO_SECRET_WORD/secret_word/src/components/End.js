import './End.css'; 

const End = ({resetGame}) => {
  return (
    <div>
      <h1>End</h1>
      <button onClick={resetGame}>Resetar Jogo</button>
    </div>
  )
}

export default End