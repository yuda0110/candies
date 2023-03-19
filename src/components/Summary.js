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
      <li key={candy.id}>
        <div>{candy.name}</div>
        <div>${candy.price}</div>
        <div>X {candy.quantity}</div>
        <div>${candy.price * candy.quantity}</div>
      </li>
    )
  })

  return (
    <section className={styles.summary}>
      <h2>Summary</h2>
      {candyList.length > 0 ? (
        <div>
          <ul>{renderedCandyList}</ul>
          <div>Total: ${total}</div>
        </div>
      ) : (
        <p>No candy in your box.</p>
      )}
    </section>
  )
}

export default Summary;
