import { useState } from 'react';
import styles from './Form.module.scss';

function Form({ selectedCandy, onSubmit }) {
  const [quantity, setQuantity] = useState(0);

  const submitHandler = event => {
    event.preventDefault();
    onSubmit({
      id: selectedCandy.id,
      name: selectedCandy.name,
      price: selectedCandy.price,
      quantity: quantity
    });
  }

  const changeHandler = event => {
    setQuantity(event.target.value);
  }

  const incrementMinus = event => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  const incrementPlus = event => {
    if (quantity < 1000) {
      setQuantity(quantity + 1);
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={submitHandler}
    >
      <h2>Enter Quantity</h2>
      <div className={styles.candyInfo}>
        <div>{selectedCandy.name}</div>
        <div>${selectedCandy.price}</div>
      </div>

      <div className={styles.formContent}>
        <label className={styles.label}>Quantity</label>
        <div className={styles.inputContainer}>
          <span className={styles.increment} onClick={incrementMinus}>
            -
          </span>
          <input
            className={styles.input}
            type="number"
            min="0"
            max="1000"
            value={quantity}
            pattern="[0-9]{1,4}"
            maxLength="4"
            onChange={changeHandler}
          />
          <span className={styles.increment} onClick={incrementPlus}>
            +
          </span>
        </div>
        <button className={styles.button}>Add</button>
      </div>

    </form>
  )
}

export default Form;
