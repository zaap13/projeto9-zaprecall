import styled from "styled-components";
import logo from "./img/logo.png"

const Head = styled.header`
  position: fixed;
  height: 80px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  font-family: "Righteous";
  font-size: 36px;
  color: white;
  z-index: 1;
`;

const Logo = styled.img`
  width: 52px;
  height: 60px;
`;

export default function Header() {
  return (
    <Head>
      <Logo src={logo}/>
      ZapRecall
    </Head>
  );
}
