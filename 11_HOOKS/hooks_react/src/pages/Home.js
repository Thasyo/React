import React from 'react'
import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'

//context
import { useContext } from 'react'
import { someContext } from '../components/HookUseContext'

const Home = () => {

  const {contextValue} = useContext(someContext)

  return (
    <div>
        <HookUseState/>
        <HookUseReducer/>
        <HookUseEffect/>
        <h2>useContext</h2>
        <p>Valor do contexto: {contextValue}</p>
    </div>
  )
}

export default Home