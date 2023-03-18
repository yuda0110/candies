import styles from './CandyShow.module.scss'

function CandyShow({ candy }) {
  return (
    <li className={styles.candy}>
      <div className={styles.name}>{candy.name}</div>
      <div className={styles.price}>${candy.price}</div>
    </li>
  )
}

export default CandyShow;
