const UserDetails = ({name, age, job}) => {
  return (
    <div>
        <ul>
            <li>Nome: <strong>{name}</strong> | Idade: <strong>{age}</strong> | Profissão: <strong>{job}</strong></li>
        </ul>
        {age >= 18 ? (
            <p>Habilitação Disponível?  <strong>SIM!</strong></p>
        ) : (
            <p>Habilitação Disponível? <strong>NÃO!</strong></p>
        )}
    </div>
  )
}

export default UserDetails;