const Container = ({children, myValue}) => {
  return (
    <div>
        <h2>Testando Children Prop</h2>
        {children}
        <p>{myValue}</p>
    </div>
  )
}

export default Container