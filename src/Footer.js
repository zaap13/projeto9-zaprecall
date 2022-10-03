import styled from "styled-components";

export default function Footer({ counter, total, queue }) {
  return (
    <Foot data-identifier="flashcard-counter">
      {counter}/{total} CONCLUÍDOS
      <Queue>
        {queue.map((i, index) => (
          <img
            src={i}
            alt="icon"
            key={index}
            data-identifier="flashcard-status"
          />
        ))}
      </Queue>
    </Foot>
  );
}
const Queue = styled.div`
  display: flex;
  gap: 5px;
`;

const Foot = styled.footer`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;
