/* TRABALHANDO COM HOOKS E TESTANDO O USESTATE() */

import {useState} from 'react';

const ManageData = () => {

    let someData = 10;

    const [number, setNumber] = useState(15);

    return (
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar Variável</button>
        
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(30)}>Mudar state</button>
        </div>
    );

};

export default ManageData;