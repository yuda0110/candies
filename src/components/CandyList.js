import styles from './CandyList.module.scss';
import { candies } from '../conf/candies';
import CandyShow from './CandyShow';

function CandyList() {
  const renderedCandies = candies.map(candy => {
    return <CandyShow candy={candy} />
  });
  return (
    <div className={styles.candyListContainer}>
      <h1>Candy</h1>
      <ul className={styles.candyList}>
        {renderedCandies}
      </ul>
    </div>
  );
}

export default CandyList;