import styled from "styled-components";
import {
  AccountBalanceWalletOutlinedIcon,
  LinkOutlinedIcon,
} from "../theme/layout/icons";

interface BlockchainStatusProps {
  blocksMined?: number;
  wallets?: number;
  transactionsProceeded?: number;
}

export function BlockchainStatus({
  blocksMined,
  wallets,
  transactionsProceeded,
}: BlockchainStatusProps) {
  return (
    <Container>
      <Header>
        <LinkOutlinedIcon />
        <Label>Blockchain Status</Label>
      </Header>
      <Content>
        <Text>Blocks Mined:</Text>
        <Text>Wallets:</Text>
        <Text>transactions proceeded:</Text>
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
