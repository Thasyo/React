import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Form em React</h2>
      <MyForm 
        user={{name: 'Thasyo', email: 'Thasyo@gmail.com', bio: 'Sou desenvolvedor React', role: 'Estagiário'}}
      />
    </div>
  );
}

export default App;
