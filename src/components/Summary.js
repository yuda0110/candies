import { useState, useEffect } from 'react';
import styles from './Summary.module.scss';

function Summary({ candyList }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let updatedTotal = 0;
    candyList.forEach(candy => {
      updatedTotal = updatedTotal + candy.price * candy.quantity
    });
    console.log('updatedTotal:', updatedTotal);
    setTotal(updatedTotal);
  }, [candyList])

  const renderedCandyList = candyList.map(candy => {
    return (
      <li className={styles.candy} key={candy.id}>
        <div>{candy.name}</div>
        <div className={styles.detail}>
          <span className={styles.price}>${candy.price}</span>
          <span className={styles.quantity}>{candy.quantity}</span>
        </div>
      </li>
    )
  })

  return (
    <section className={styles.summary}>
      <h2>Summary</h2>
      {candyList.length > 0 ? (
        <>
          <ul className={styles.candyList}>{renderedCandyList}</ul>
          <div className={styles.total}>Total: ${total}</div>
        </>
      ) : (
        <p className={styles.message}>No candy in your box.</p>
      )}
    </section>
  )
}

export default Summary;
