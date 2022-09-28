import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

import FlashCard from "./FlashCard";
import { useState } from "react";

export default function Main({ deck, total }) {
  const [counter, setCounter] = useState(0);
  
  return (
    <>
      <Header />
      <Deck>
        {deck.map((q, i) => (
          <FlashCard key={i} number={i + 1} pergunta={q[0]} resposta={q[1]} setCounter={setCounter}/>
        ))}
      </Deck>
      <Footer counter={counter} total={total}/>
    </>
  );
}

const Deck = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 600px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
