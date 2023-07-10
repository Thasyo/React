import React, { useEffect, useState } from 'react'

const HookUseEffect = () => {

    //1- UseEffect, sem dependências - executa sempre que o componente é re-renderizado.
    useEffect(() => {
        console.log("Estou sendo executado")
    })

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1)
    }

    //2- UseEffect, com array de dependência vazio - é executado somente uma vez.
    useEffect(() => {
        console.log("Serei executado somente uma vez!")
    }, []);

    //3- UseEffect, com item no array de dependências - é executado sempre que o item for alterado.
    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() => {
        if(anotherNumber > 0){
            console.log("Another Number mudou de valor!")    
        }
    }, [anotherNumber])
    
    //4- Cleanup do useEffect
    useEffect(()=>{
        /* const timer = setTimeout(() => {
            console.log("Hello World!")
            setAnotherNumber(anotherNumber + 1)
        }, 2000)

        return () => clearTimeout(timer) */
    }, [anotherNumber])

  return (
    <div>
        <h2>useEffect</h2>
        <p>Número: {number}</p>
        <button onClick={changeSomething}>Alterar</button>
        <p>Outro número: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar Another Number!</button>
        <hr />
    </div>
  )
}

export default HookUseEffect