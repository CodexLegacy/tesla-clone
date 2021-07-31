import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Section = ({
  title,
  description,
  subDescription,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
    <Fade bottom>
      <ItemText>
        <h1>{title}</h1>
        <p>
          {description} <a>{subDescription}</a>
        </p>
      </ItemText>
      </Fade>
      <Buttons>
      <Fade bottom>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
        </Fade>
        <DownArrow src='/images/down-arrow.svg' alt='arrow-button' />
      </Buttons>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url('images/${props.bgImage}')`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Buttons = styled.div`
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;

  a {
    border-bottom: 1px solid black;
    cursor: pointer;

    &:hover {
      border-bottom: 2px solid black;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: black;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
  font-weight: 400;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
  cursor: pointer;
`;

export default Section;
