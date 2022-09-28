
import Main from "./Main";
import GlobalStyle from "./globalStyles";
import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      
      <Main />
    </Container>
  );
}

const Container = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
