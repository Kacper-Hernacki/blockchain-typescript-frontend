import { useEffect, useState } from "react";
import axios from "axios";
// Components
import { Blocks, Nav, Wallet, Footer, BlockchainStatus } from "./components";
import { AppContainer, Row } from "./theme/layout/common";

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

function App() {
  const [blocks, setBlocks] = useState([]);
  const [wallet, setWallet] = useState<any>({});
  const [error, setError] = useState();

  useEffect(() => {
    const controller = new AbortController();
    getBlocks()
      .then((response: any) => {
        setBlocks(response);
      })
      .catch((e) => {
        setError(e);
      });

    getWallet()
      .then((response: any) => {
        setWallet(response);
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
      const { data, status } = await axios.get<GetBlockResponse>(
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

  return (
    <AppContainer>
      <Nav />
      <Row>
        <Wallet
          publicKey={wallet.publicKey}
          privateKey={wallet.privateKey}
          balance={wallet.balance}
        />
        <BlockchainStatus />
      </Row>
      <Blocks blocks={blocks} />
      <Footer />
    </AppContainer>
  );
}

export default App;
