import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Btn = styled.button`
  background-color: ${(props) => props.theme.btnColor};
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <div>
      <Container>
        <H1>protected</H1>
        <Btn>is</Btn>
      </Container>
    </div>
  );
}

export default App;
