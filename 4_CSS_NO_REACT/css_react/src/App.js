import './App.css';
import MyComponents from './components/MyComponents';

import {useState} from "react";
import Paragraph from './components/Paragraph.js';

function App() {

  const n = -10;

  const [name] = useState("pera");

  const ainBixa = false;

  return (
    <div className="App">
      {/* CSS GLOBAL */}
      <h1>React com CSS</h1>
      {/* CSS GLOBAL */}
      <MyComponents/>
      <p>Este é o parágrafo do App.js</p>
      {/* CSS INLINE */}
      <p style={{color: "magenta", padding: "10px", borderBottom: "2px solid blue"}}>parágrafo com css inline</p>
      {/* CSS INLINE DINÂMICO */}
      <h3 style={n > 0 ? ({color: "purple"}) : ({color: "pink"})}>CSS DINÂMICO</h3>
      <h4 style={name === "Batata" ? ({color: "magenta", backgroundColor: "pink"}) : ({color: "pink", backgroundColor: "magenta"})}>NOME BATATA</h4>
      {/* CLASSES DINÃMICAS CSS */}
      <h3 className={ainBixa ? "pink-title" : "black-title"}>Este título está estilizado com classes dinâmicas.</h3>
      {/* CSS MODULES */}
      <Paragraph/>
    </div>
  );
}

export default App;
