import { useState } from 'react';

function Form({ selectedCandy, onSubmit }) {
  const [quantity, setQuantity] = useState(0);

  const submitHandler = event => {
    event.preventDefault();
    onSubmit();
  }

  const changeHandler = event => {
    setQuantity(event.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <div>{selectedCandy.name}</div>
      <div>${selectedCandy.price}</div>
      <label>Quantity</label>
      <input
        type="number"
        min="0"
        max="1000"
        value={quantity}
        onChange={changeHandler}
      />
      <button>Add</button>
    </form>
  )
}

export default Form;
