import { useState, useEffect } from 'react';
import styles from './CandyShow.module.scss';

function CandyShow({ candy, dragStart, addedCandies }) {
  const [added, setAdded] = useState(false);

  useEffect(() => {
    addedCandies.forEach((addedCandy) => {
      if (candy.id === addedCandy.id) {
        setAdded(true);
      }
    })
  }, [addedCandies, candy.id])

  return (
    <li
      id={candy.id}
      className={styles.candy}
      draggable="true"
      onDragStart={dragStart}
    >
      {added && <span className={styles.added}>Added!</span>}
      <div className={styles.name}>{candy.name}</div>
      <div className={styles.price}>${candy.price}</div>
    </li>
  )
}

export default CandyShow;
