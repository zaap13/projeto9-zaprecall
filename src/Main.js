import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

import FlashCard from "./FlashCard";

export default function Main() {
  return (
    <>
      <Header />
      <Deck>
        <FlashCard
          number="oitenta"
          pergunta="perguntinha"
          resposta="respostinha"
        />
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
