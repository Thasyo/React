import {useState, useLayoutEffect, useEffect} from 'react'

const HookUseLayoutEffect = () => {

    const [name, setName] = useState("Algum nome")

    useEffect(() => {
        console.log("2");
        setName("Mudou de novo!")
    }, [])

    useLayoutEffect(() => {
        console.log("1")
        setName("Outro nome")
    }, [])

    console.log(name)

  return (
    <div>
        <h2>UseLayoutEffect</h2>
        <p>nome: {name}</p>
        <hr />
    </div>
  )
}

export default HookUseLayoutEffect