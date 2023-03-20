import { Component } from 'react';
import { FeedbackOptions, Statisics, Section, Notification } from './feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = type =>
    this.setState(previouseState => ({ [type]: previouseState[type] + 1 }));

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={{ good: 'Good', neutral: 'Neutral', bad: 'Bad' }}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {this.countTotalFeedback() ? (
          <Statisics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    );
  }
}
