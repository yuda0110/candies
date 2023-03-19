import styles from './CandyShow.module.scss'

function CandyShow({ candy, dragStart }) {
  return (
    <li
      id={candy.id}
      className={styles.candy}
      draggable="true"
      onDragStart={dragStart}
    >
      <div className={styles.name}>{candy.name}</div>
      <div className={styles.price}>${candy.price}</div>
    </li>
  )
}

export default CandyShow;
