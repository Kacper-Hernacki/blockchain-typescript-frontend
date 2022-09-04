import styled from "styled-components";
import { LinkOutlinedIcon } from "../theme/layout/icons";

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
        <Text>
          Blocks Mined: <span>{blocksMined}</span>
        </Text>
        <Text>
          Wallets: <span>{wallets}</span>
        </Text>
        <Text>
          transactions proceeded: <span>{transactionsProceeded}</span>
        </Text>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  height: 300px;
  width: 400px;
  background-color: #235093b8;
  margin: 10px;
  padding: 10px;
  border-radius: 16px;

  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);

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

  span {
    color: #ededed;
    font-weight: 500;
  }
`;
