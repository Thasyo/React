import "./MyComponents.css";

const MyComponents = () => {
  return (
    <div>
        <h1>CSS de componente</h1>
        <p>Este é o parágrafo do MyComponents.js</p>
        {/* Eu consigo delimitar minhas estilizações com classes e ids para um componente, somente. */}
        <p className="my-comp-paragraph">Outro parágrafo do MyComponents.js</p>
    </div>
  )
}

export default MyComponents