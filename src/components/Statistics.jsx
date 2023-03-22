import PropTypes from 'prop-types';
import { StatText } from './Feedback.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <StatText>Good: {good}</StatText>
      <StatText>Neutral: {neutral}</StatText>
      <StatText>Bad: {bad}</StatText>
      <StatText>Total: {total}</StatText>
      <StatText>Positive feedback: {positivePercentage || 0}%</StatText>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export { Statistics };
