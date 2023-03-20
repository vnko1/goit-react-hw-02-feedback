const Statisics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p>Statistics</p>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage || 0}%</p>
    </div>
  );
};

export { Statisics };
