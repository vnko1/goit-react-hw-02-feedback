import PropTypes from 'prop-types';
import { ButtonContainer, FeedbackButton } from './Feedback.styled';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const { good, neutral, bad } = options;

  return (
    <ButtonContainer>
      <FeedbackButton
        type="button"
        onClick={() => onLeaveFeedback(good.toLowerCase())}
      >
        {good}
      </FeedbackButton>
      <FeedbackButton
        type="button"
        onClick={() => onLeaveFeedback(neutral.toLowerCase())}
      >
        {neutral}
      </FeedbackButton>
      <FeedbackButton
        type="button"
        onClick={() => onLeaveFeedback(bad.toLowerCase())}
      >
        {bad}
      </FeedbackButton>
    </ButtonContainer>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.shape({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
  }).isRequired,
};

export { FeedbackOptions };
