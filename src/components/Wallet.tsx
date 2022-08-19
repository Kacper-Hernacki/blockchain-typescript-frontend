import styled from "styled-components";
import { AccountBalanceWalletOutlinedIcon } from "../theme/layout/icons";

interface WalletProps {
  publicKey?: string;
  privateKey?: string;
}

export function Wallet({ publicKey, privateKey }: WalletProps) {
  return (
    <Container>
      <Header>
        <AccountBalanceWalletOutlinedIcon />
        <Label>Wallet</Label>
      </Header>
      <Content>
        <Text>Public key:</Text>
        <Text>Private Key:</Text>
        <Text>Balance:</Text>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  height: 200px;
  width: 300px;
  background-color: #235093b8;
  margin: 10px;
  padding: 10px;
  border-radius: 16px;

  svg {
    font-size: 24px;
    color: #19283d;
    margin-right: 5px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Label = styled.h3`
  color: #19283d;
`;

const Content = styled.div`
  margin-top: 20px;
`;

const Text = styled.h6`
  margin-top: 10px;
`;
