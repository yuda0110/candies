import styles from './CandyList.module.scss';
import { candies } from '../conf/candies';
import CandyShow from './CandyShow';

function CandyList({ dragStart }) {
  const renderedCandies = candies.map(candy => {
    return (
      <CandyShow
        candy={candy}
        key={candy.id}
        dragStart={dragStart}
      />
    )
  });
  return (
    <div className={styles.candyListContainer}>
      <h1>Create Your Custom Mix</h1>
      <ul className={styles.candyList}>
        {renderedCandies}
      </ul>
    </div>
  );
}

export default CandyList;