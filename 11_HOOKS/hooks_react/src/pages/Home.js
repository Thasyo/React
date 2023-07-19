import React from 'react'

//hooks
import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'
import HookUseRef from '../components/HookUseRef'

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
        <hr />
        <HookUseRef/>
    </div>
  )
}

export default Home