import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const rotationAnimation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 20px;
  }
  50%{
    transform: rotate(180deg);
    border-radius: 100px;
  }
  100%{
    transform: rotate(360deg);
    border-radius: 20px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
  color: ${(props) => props.theme.textColor};
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 3s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="p">❤</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
