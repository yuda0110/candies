import { candies } from '../conf/candies'

function CandyList() {
  const renderedCandies = candies.map(candy => {
    return <p>{candy.name}</p>
  });
  return (
    <div>
      <h1>Candy</h1>
      {renderedCandies}
    </div>
  );
}

export default CandyList;