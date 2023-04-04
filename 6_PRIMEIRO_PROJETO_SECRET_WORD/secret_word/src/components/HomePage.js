import './HomePage.css';

const HomePage = ({startGame}) => {
  return (
    <div className='home'>
        <h1>Secret Word</h1>
        <button onClick={startGame}>Iniciar</button>
    </div>
  )
}

export default HomePage