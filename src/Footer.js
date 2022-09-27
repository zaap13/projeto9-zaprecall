import styled from "styled-components";

const Foot = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 1;
  width: 100%;
  min-height: 70px;
  padding: 14px 10px;
  font-size: 18px;
  color: black;
  position: fixed;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Action = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

const Buttom = styled.button`

  width: 100%;
  height: 40px;
  background-color: green;
  color: white;
  font-size: 12px;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: brightness(0.7);
  }
`;

const Error = styled(Buttom)`
  background-color: var(--cor-nao-lembrei);
`;
const Almost = styled(Buttom)`
  background-color: var(--cor-quase-nao-lembrei);
`;
const Zap = styled(Buttom)`
  background-color: var(--cor-zap);
`;

export default function Footer() {
  return (
    <Foot>
      <Action>
        <Error>Não lembrei</Error>
        <Almost>Quase não lembrei</Almost>
        <Zap>Zap!</Zap>
      </Action>
      0/4 CONCLUÍDOS
    </Foot>
  );
}
