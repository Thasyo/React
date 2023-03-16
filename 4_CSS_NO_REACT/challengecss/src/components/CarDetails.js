import styles from './CarDetails.module.css'

const carDetails = ({brand, color, km}) => {
  return (
    <div>
        <ul className={styles.list_car}>
            <li className={styles.list_item}><strong>Marca: {brand}</strong></li>
            <li className={styles.list_item}><strong>Cor: {color}</strong></li>
            <li className={styles.list_item}><strong>KM: {km}</strong></li>
        </ul>
    </div>
  )
}

export default carDetails;