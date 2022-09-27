import styled from "styled-components";

const Deck = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FlashCard = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 10px 10px;
  cursor: pointer;
`;

export default function Main() {
  return (
    <Deck>
      <FlashCard />
      <FlashCard />
      <FlashCard />
      <FlashCard />
      <FlashCard />
      <FlashCard />
      <FlashCard />
      <FlashCard />
    </Deck>
  );
}
