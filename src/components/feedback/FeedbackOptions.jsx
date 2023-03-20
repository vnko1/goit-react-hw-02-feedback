import { FeedbackButton } from './Feedback.styled';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const { good, neutral, bad } = options;

  return (
    <>
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
    </>
  );
};

export { FeedbackOptions };
