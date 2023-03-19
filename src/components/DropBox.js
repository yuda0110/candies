import styles from './DropBox.module.scss';

function DropBox({ drop }) {
  const dragOverHandler = event => {
    event.preventDefault();
  };

  return (
    <div
      className={styles.dropBox}
      onDragOver={dragOverHandler}
      onDrop={drop}
    >
      Drop Candy Here!
    </div>
  )
}

export default DropBox;
