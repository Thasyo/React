import {useState} from 'react'

const ListRender = () => {
  
    const [list] = useState(["Thasyo", "Maria", "Josefa", "Leonardo"])

    const [users, setUsers] = useState([
        {id: 1, name: "Thasyo", age: 20},
        {id: 2, name: "Eduarda", age: 17},
        {id: 3, name: "José", age: 25},
        {id: 4, name: "Daniela", age: 22},
    ])

    const deleteRandom = () => {

        const randomNumber = Math.floor(Math.random() * 5)

        setUsers((prevUsers) => {

            return prevUsers.filter((user) => randomNumber !== user.id)

        })

    }
  
    return (
    <div>

        <h3>Utilizando a propriedade key com o index do map()</h3>

        <ul>
            {list.map((name, i) => (
                <li key={i}>{name}</li>
            ))}
        </ul>

        <h3>Utilizando a propriedade key com um chave única para cada item da lista</h3>
        <h4>Use nos seus projetos sempre esse método.</h4>


        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>

    </div>
  )

}

export default ListRender;