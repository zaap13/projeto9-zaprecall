import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import FlashCard from "./FlashCard";
import { useState } from "react";
import sad from "./img/sad.png";
import party from "./img/party.png";

export default function Main({ deck, total, meta }) {
  const [counter, setCounter] = useState(0);
  const [zaps, setZaps] = useState(0);
  const [queue, setQueue] = useState([]);

  return (
    <>
      <Header />
      {counter === total ? (
        <Overlay>
          {zaps >= meta ? (
            <>
              <p>Parabéns!!!</p> <img src={party} alt="Venceu" />
            </>
          ) : (
            <>
              <p>Putz</p> <img src={sad} alt="Perdeu" />{" "}
            </>
          )}
        </Overlay>
      ) : (
        <></>
      )}
      <Deck>
        {deck.map((q, i) => (
          <FlashCard
            key={i}
            number={i + 1}
            pergunta={q[0]}
            resposta={q[1]}
            setCounter={setCounter}
            setQueue={setQueue}
            queue={queue}
            meta={meta}
            setZaps={setZaps}
            zaps={zaps}
          />
        ))}
      </Deck>
      <Footer counter={counter} total={total} queue={queue} />
    </>
  );
}

const Overlay = styled.div`
  position: fixed;
  z-index: 2;
  width: fit-content;
  background-color: white;
  border: solid 1px #333333;
  top: 40%;
  display: flex;
  gap: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  padding: 5px;
`;

const Deck = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 600px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
