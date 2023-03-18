import { candies } from '../conf/candies'
import CandyShow from './CandyShow';

function CandyList() {
  const renderedCandies = candies.map(candy => {
    return <CandyShow candy={candy} />
  });
  return (
    <div>
      <h1>Candy</h1>
      {renderedCandies}
    </div>
  );
}

export default CandyList;