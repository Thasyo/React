import React, { useEffect, useRef, useState } from 'react'

const HookUseRef = () => {

    //1- useRef
    const numberRef = useRef(0)
    const [counterA, setCounterA] = useState(0)
    const [counterB, setCounterB] = useState(0)

    console.log(numberRef.current)

    useEffect(() => {
        numberRef.current = numberRef.current + 1
    })

    //2- useRef e o DOM
    const inputRef = useRef()
    const [text, setText] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        setText("")
        inputRef.current.focus()
    }

  return (
    <div>
        <h2>UseRef</h2>
        <p>O numberRef renderizou: {numberRef.current} vezes.</p>
        <p>ContadorA: {counterA}</p>
        <button onClick={() => setCounterA(counterA + 1)}>click</button>
        <p>ContadorB: {counterB}</p>
        <button onClick={() => setCounterB(counterB + 1)}>click</button>
        <br /> <br />
        <form onSubmit={handleSubmit}>
            <label>
                <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)}/>
            </label>
            <button>Tchákatchan</button>
        </form>
        <hr />
    </div>
  )
}

export default HookUseRef