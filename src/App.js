import Main from "./Main";
import GlobalStyle from "./globalStyles";
import styled from "styled-components";
import decks from "./decks";
import { useState } from "react";
import logo from "./img/logo.png";

export default function App() {
  const [start, setStart] = useState(false);
  const [deck, setDeck] = useState("");
  const [meta, setMeta] = useState("");

  return (
    <>
      <GlobalStyle />
      <Container>
        {start ? (
          <Main deck={decks[deck][1]} total={decks[deck][1].length} meta={meta} />
        ) : (
          <HomePage>
            <img src={logo} alt="Logo" />

            <Select
              name="Deck"
              value={deck}
              onChange={(e) => setDeck(e.target.value)}
            >
              <option value="">Escolha seu deck</option>
              {decks.map((i, index) => (
                <option key={index} value={index}>
                  {i[0]}
                </option>
              ))}
            </Select>
            <Meta value={meta} onChange={e => setMeta(e.target.value)} placeholder="Digite sua meta de zaps..." />
            <Start
              disabled={(deck !== "" && meta > 0 && meta <= decks[deck][1].length) ? false : true}
              onClick={() => setStart(true)}
            >
              Iniciar Recall!
            </Start>
          </HomePage>
        )}
      </Container>
    </>
  );
}

const Meta = styled.input`
  width: 246px;
  height: 43px;

  background: #ffffff;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 246px;
  height: 43px;

  background: #ffffff;
  border-radius: 5px;
`;

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  img {
    width: 136px;
    margin: 40px 0 20px 0;
  }
`;

const Start = styled.button`
  width: 246px;
  height: 54px;

  background: #ffffff;
  border: 1px solid #d70900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;

  color: #d70900;

  &:disabled {
    background: #e8e8e8;
    color: #c0c0c0;
    border: none;
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
