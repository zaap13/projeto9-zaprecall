import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

import FlashCard from "./FlashCard";

export default function Main({ deck }) {
  console.log(deck);
  return (
    <>
      <Header />
      <Deck>
        {deck.map((q, i) => (
          <FlashCard
          key={i}
            number={i+1}
            pergunta={q[0]}
            resposta={q[1]}
          />
        ))}
      </Deck>
      <Footer />
    </>
  );
}

const Deck = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
