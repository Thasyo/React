import React, { useReducer, useState } from 'react'

const HookUseReducer = () => {

    //1- Iniciando no useReducer
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state);
    })

    //2- Avançando no useReducer
    const tasksList = [
        {id: 1, text: "Fazer alguma coisa"},
        {id: 2, text: "Fazer outra coisa"},
    ]

    const taskReducer = (state, action) => {

        switch (action.type) {
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: text,
                }

                setText("")

                return [...state, newTask]

            case "DELETE":
                return state.filter((task) => task.id !== action.id)
            default:
                return state
        }

    }

    const [text, setText] = useState("")
    const [tasks, dispatchTasks] = useReducer(taskReducer, tasksList)

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatchTasks({type: "ADD"});
    }

    const removeTask = (id) => {
        dispatchTasks({type: "DELETE", id: id})
    }

  return (
    <div>
        <h2>UseReducer</h2>
        <p>Número: {number}</p>
        <button onClick={dispatch}>Alterar Valor</button>

        <h3>Lista de tarefas</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <input type="submit" value="Enviar"/>
        </form>

        <div>
            {tasks.map((task) => (
                <li key={task.id}>{task.text} <button onClick={() => removeTask(task.id)}>Deletar</button></li>
            ))}
        </div>
    </div>
  )
}

export default HookUseReducer