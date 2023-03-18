function CandyShow({ candy }) {
  return (
    <div>
      <div>{candy.name}</div>
      <div>${candy.price}</div>
    </div>
  )
}

export default CandyShow;
