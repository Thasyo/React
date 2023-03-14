import React from 'react'

const CarDetails = ({brand, color, km, newCar}) => {
  return (
    <div>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>Cor: {color}</li>
            <li>KM: {km}</li>
        </ul>
        {newCar && <p>Este Carro é Novo!</p>}
    </div>
  )
}

export default CarDetails