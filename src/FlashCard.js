import { useState } from "react";
import styled from "styled-components";
import setinha from "./img/seta_virar.png";
import play from "./img/seta_play.png";
import zap from "./img/icone_certo.png";
import almost from "./img/icone_quase.png";
import error from "./img/icone_erro.png";

export default function FlashCard({ number, pergunta, resposta, setCounter }) {
  const [cardOpen, setCardOpen] = useState(false);
  const [cardFlip, setCardFlip] = useState(false);
  const [done, setDone] = useState("");
  const [icon, setIcon] = useState(play);

  return (
    <>
      <Card open={cardOpen} done={done}>
        {cardOpen ? (
          cardFlip ? (
            <>
              <p>{resposta}</p>
              <Action>
                <Error
                  onClick={() => {
                    setDone("#FF3030");
                    setCardOpen(false);
                    setIcon(error);
                    setCounter((counter) => counter + 1);
                  }}
                >
                  Não lembrei
                </Error>
                <Almost
                  onClick={() => {
                    setDone("#FF922E");
                    setCardOpen(false);
                    setIcon(almost);
                    setCounter((counter) => counter + 1);
                  }}
                >
                  Quase não lembrei
                </Almost>
                <Zap
                  onClick={() => {
                    setDone("#2FBE34");
                    setCardOpen(false);
                    setIcon(zap);
                    setCounter((counter) => counter + 1);
                  }}
                >
                  Zap!
                </Zap>
              </Action>
            </>
          ) : (
            <>
              <p>{pergunta}</p>
              <Flipper
                src={setinha}
                alt="setinha"
                onClick={() => setCardFlip(true)}
              />
            </>
          )
        ) : (
          <>
            <CardNumber>Pergunta {number}</CardNumber>
            <img
              src={icon}
              alt="play"
              onClick={() => setCardOpen(icon === play ? true : false)}
            />
          </>
        )}
      </Card>
    </>
  );
}

const Card = styled.div`
  width: 300px;
  min-height: ${(props) => (props.open ? "fit-content" : "35px")};
  background-color: ${(props) => (props.open ? "#FFFFD5" : "#ffffff")};
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  flex-direction: ${(props) => (props.open ? "column" : "row")};
  align-items: ${(props) => (props.open ? "flex-start" : "center")};
  justify-content: space-between;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: ${(props) => (props.done === "" ? "#333333" : props.done)};
  position: relative;
`;

const CardNumber = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

const Flipper = styled.img`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const Action = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
  gap: 10px;
`;

const Buttom = styled.button`
  width: 90px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  border-radius: 5px;
  border: 1px solid blue;
  padding: 5px;
`;

const Error = styled(Buttom)`
  background-color: #ff3030;
`;
const Almost = styled(Buttom)`
  background-color: #ff922e;
`;
const Zap = styled(Buttom)`
  background-color: #2fbe34;
`;
