import { useState } from "react";
import styled from "styled-components";
import { Button } from "../theme/layout/common";
import { AccountBalanceWalletOutlinedIcon } from "../theme/layout/icons";
import { TransactionModal } from "./TransactionModal";

interface WalletProps {
  publicKey: string;
  privateKey: string;
  balance: number;
}

export function Wallet({ publicKey, privateKey, balance }: WalletProps) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Container>
        <Header>
          <AccountBalanceWalletOutlinedIcon />
          <Label>Wallet</Label>
        </Header>
        <Content>
          <Text>
            Public key:<span>{publicKey} </span>
          </Text>
          <Text>
            Private key: <span>{privateKey}</span>
          </Text>
          <Text>
            Balance: <span>{balance}</span>
          </Text>
        </Content>
        <ButtonWrapper>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenModal(true)}
          >
            Make Transaction
          </Button>
        </ButtonWrapper>
      </Container>
      <TransactionModal
        publicKey={publicKey}
        isOpen={openModal}
        handleClose={() => {
          setOpenModal(false);
        }}
      />
    </>
  );
}

const Container = styled.div`
  height: 300px;
  width: 400px;
  background-color: #235093b8;
  margin: 10px;
  padding: 10px;
  border-radius: 16px;
  word-wrap: break-word;

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

const ButtonWrapper = styled(Button)`
  width: 100%;
  padding-top: 15px !important;
  display: grid;
  place-items: center;
`;
