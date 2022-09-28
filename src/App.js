import Main from "./Main";
import GlobalStyle from "./globalStyles";
import styled from "styled-components";
import decks from "./decks";
import { useState } from "react";
import logo from "./img/logo.png";

export default function App() {
  const [start, setStart] = useState(false);
  const [deck, setDeck] = useState("");

  return (
    <>
      <GlobalStyle />
      <Container>
        {start ? (
          <Main deck={decks[deck][1]} />
        ) : (
          <HomePage>
            <img src={logo} alt="Logo" />

            <select
              name="Deck"
              value={deck}
              onChange={(e) => setDeck(e.target.value)}
            >
              <option value="">Escolha o deck</option>
              {decks.map((i, index) => (
                <option key={index} value={index}>
                  {i[0]}
                </option>
              ))}
            </select>
            <button onClick={() => setStart(true)}>START</button>
          </HomePage>
        )}
      </Container>
    </>
  );
}

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 136px;
    margin: 40px 0 20px 0;
  }
`;

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
