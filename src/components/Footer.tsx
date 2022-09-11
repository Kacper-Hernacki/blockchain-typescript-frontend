import styled from "styled-components";
import { Link } from "../theme/layout/common";
import { GitHubIcon, TwitterIcon } from "../theme/layout/icons";

interface FooterProps {}

export function Footer({}: FooterProps) {
  return (
    <Container>
      <Promo>
        <Text>
          If you want free materials about web3, look at my 100 days of web3
          challenge. A lot of content is available here 👇
        </Text>
        <IconsContainer>
          <Link href="https://github.com/Kacper-Hernacki/100-days-of-web3-challenge-blockchain-free-materials">
            <GitHubIcon />
          </Link>
          <Link href="https://twitter.com/KacperHernacki">
            <TwitterIcon />
          </Link>
        </IconsContainer>
      </Promo>
      <Text>Created with 🤍 by Kacper Hernacki</Text>
      <Text>🚀 version 1.0.0</Text>
      <SubText>2022 Ⓒ</SubText>
    </Container>
  );
}

const Container = styled.div`
  height: 150px;
  width: 100%;
  background-color: transparent;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #66a3ff;

  -webkit-box-shadow: 0px -9px 24px -9px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px -9px 24px -9px rgba(66, 68, 90, 1);
  box-shadow: 0px -9px 24px -9px rgba(66, 68, 90, 1);
`;

const Text = styled.h6`
  color: #19283d;
`;

const SubText = styled.h6`
  color: #19283d;
`;

const Promo = styled.div`
  max-width: 350px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;

  svg {
    margin-left: 5px;
    margin-right: 5px;
    font-size: 16px;
  }
`;
