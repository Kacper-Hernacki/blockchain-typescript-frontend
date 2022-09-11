import { useEffect, useState } from "react";
import axios from "axios";
// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";

// Components
import { Blocks, Nav, Wallet, Footer, BlockchainStatus } from "./components";
import { AppContainer, Button, Row } from "./theme/layout/common";
import styled from "styled-components";

import {
  addAuthenticatedWallet,
  addWallet,
} from "./features/wallet/walletSlice";
import { WalletModal } from "./components/WalletModal";

type Block = {
  timestamp: string;
  transactions: Array<any>;
  previousHash: string;
  hash: string;
  nonce: number;
  validator: string;
  signature: string;
};

type GetBlockResponse = {
  data: Block[];
};

type Transactions = {
  timestamp: string;
  transactions: Array<any>;
  previousHash: string;
  hash: string;
  nonce: number;
  validator: string;
  signature: string;
};

type GetTransactionsResponse = {
  data: Transactions[];
};

type WalletsPool = {
  timestamp: string;
  transactions: Array<any>;
  previousHash: string;
  hash: string;
  nonce: number;
  validator: string;
  signature: string;
};

type GetWalletsPoolResponse = {
  data: WalletsPool[];
};

type GetWalletResponse = {
  publicKey: string;
  privateKey: string;
  balance: number;
};

function App() {
  const lastlyCreatedWallet = useSelector(
    (state: RootState) => state.wallets.wallet
  );
  const dispatch = useDispatch();

  const wallets = useSelector((state: RootState) => state.wallets.walletsPool);

  const authenticatedWallet = useSelector(
    (state: RootState) => state.wallets.authenticatedWallet
  );

  function addNewWallet(lastlyCreatedWallet: object) {
    dispatch(addWallet(lastlyCreatedWallet));
  }

  function authenticateWallet(wallet: object) {
    dispatch(addAuthenticatedWallet(wallet));
  }

  const [blocks, setBlocks] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [walletsPool, setWalletsPool] = useState([]);
  const [wallet, setWallet] = useState<any>({});
  const [openModal, setOpenModal] = useState(false);
  const [authenticationWalletModal, setAuthenticationWalletModal] =
    useState(false);

  useEffect(() => {
    const controller = new AbortController();
    getBlocks()
      .then((response: any) => {
        setBlocks(response);
      })
      .catch((e) => {
        console.log(e);
      });

    getWallet()
      .then((response: any) => {
        // setWallet(response);
        setWallet(null);
      })
      .catch((e) => {
        console.log(e);
      });

    getWalletsPool()
      .then((response: any) => {
        setWalletsPool(response);
      })

      .catch((e) => {
        console.log(e);
      });

    getTransactions()
      .then((response: any) => {
        setTransactions(response);
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {
      controller.abort();
    };
  }, []);

  async function getBlocks() {
    try {
      const { data, status } = await axios.get<GetBlockResponse>(
        "http://localhost:1338/api/blocks",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      console.log("response status is: ", status);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }

  async function getWallet() {
    try {
      const { data, status } = await axios.get<GetWalletResponse>(
        "http://localhost:1338/api/wallet",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      console.log("response status is: ", status);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }

  async function getTransactions() {
    try {
      const { data, status } = await axios.get<GetTransactionsResponse>(
        "http://localhost:1338/api/transactions",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      console.log("response status is: ", status);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }

  async function getWalletsPool() {
    try {
      const { data, status } = await axios.get<GetWalletsPoolResponse>(
        "http://localhost:1338/api/walletsPool",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      console.log("response status is: ", status);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }

  async function createWallet() {
    try {
      const data = await axios.post<any>(
        "http://localhost:1338/api/newWallet",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      setOpenModal(true);
      addNewWallet(data?.data);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }

  function isEmpty(obj: object) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  return (
    <AppContainer>
      <Nav />
      <Row>
        {!isEmpty(authenticatedWallet) ? (
          <Wallet
            publicKey={authenticatedWallet?.publicKey}
            privateKey={authenticatedWallet?.privateKey}
            balance={authenticatedWallet?.balance}
          />
        ) : (
          <ButtonWrapper>
            <Button variant="contained" color="primary" onClick={createWallet}>
              Create Wallet
            </Button>
            <StyledButton
              variant="contained"
              onClick={() => {
                setOpenModal(true);
                setAuthenticationWalletModal(true);
              }}
            >
              Already have a wallet
            </StyledButton>
          </ButtonWrapper>
        )}
        <WalletModal
          authenticateWallet={authenticateWallet}
          lastlyCreatedWallet={lastlyCreatedWallet}
          isOpen={openModal}
          handleClose={() => {
            setOpenModal(false);
          }}
          authentcation={authenticationWalletModal}
        />
        <BlockchainStatus
          blocksMined={blocks?.length}
          transactionsProceeded={transactions?.length}
          wallets={walletsPool?.length}
        />
      </Row>
      <Blocks blocks={blocks} />
      <Footer />
    </AppContainer>
  );
}

const ButtonWrapper = styled.div`
  height: 300px;
  width: 400px;
  background-color: #235093b8;
  margin: 10px;
  padding: 10px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    margin: 10px;
  }

  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;

const StyledButton = styled(Button)`
  background-color: #31323d !important;
`;

export default App;
