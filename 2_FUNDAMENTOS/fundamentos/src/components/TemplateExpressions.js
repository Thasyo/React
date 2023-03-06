const TemplateExpressions = () => {
    
    const name = "Thasyo";
    const data = {
        age: 20,
        job: 'Recepcionista'
    };

    return (

        <div>
            <h2>Olá {name}!</h2>
            <h4>Sua idade é: {data.age}</h4>
            <h4>Profissão: {data.job}</h4>
        </div>

    )
}

export default TemplateExpressions;