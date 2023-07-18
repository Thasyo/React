import React from 'react'

//context
import { useContext } from 'react'
import { someContext } from '../components/HookUseContext'


const About = () => {

  const {contextValue} = useContext(someContext);

  return (
    <div>
      <h1>About</h1>
      <h2>UseContext</h2>
      <p>Valor do contexto: {contextValue}</p>
    </div>
  )
}

export default About