const Events = () => {

    const handleMyEvent = () => {

        console.log("Ativou o evento!")

    }

    const renderSomeThing = (x) => {
        
        if (x){
            return <h1>Renderizando... TRUE</h1>;
        } else {
            return <h1>Renderizando... FALSE</h1>;
        }

    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>

            {/* FUNÇÕES NO EVENTO */}
            <div>
                <button onClick={() => console.log("Ativando função no Evento!")}>Clique Aqui - Função no Evento</button>
            </div>
            
            {/* FUNÇÕES DE RENDERIZAÇÃO*/}
            {renderSomeThing(true)}

            {renderSomeThing(false)}
        </div>
    )

}

export default Events;