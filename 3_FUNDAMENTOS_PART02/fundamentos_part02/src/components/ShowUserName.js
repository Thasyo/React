/* TRABALHANDO UM POUCO DO CONCEITO DE PROPS. */

const showUserName = (props) => {
  return (
    <div>

        <h2>Nome Completo: {props.firstName} {props.lastNameOne} {props.lastNameTwo}</h2>

    </div>
  )
}

export default showUserName