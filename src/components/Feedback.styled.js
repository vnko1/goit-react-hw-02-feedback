import styled from '@emotion/styled';

const Container = styled.div`
  width: 320px;
  padding: 20px 20px;
  margin: 0 auto;
`;

const Title = styled.div`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 16px;
`;

const FeedbackButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: teal;
    color: white;
  }
`;

const MessageText = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;

const StatText = styled.p`
  text-align: center;
`;

export {
  Container,
  Title,
  ButtonContainer,
  FeedbackButton,
  MessageText,
  StatText,
};
