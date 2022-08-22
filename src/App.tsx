import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
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
  data: any;
};

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getBlocks() {
    try {
      // 👇️ const data: GetUsersResponse
      const data = await axios.get("http://localhost:1337/api/blocks", {
        headers: {
          Accept: "application/json",
        },
      });

      console.log(JSON.stringify(data));

      // 👇️ "response status is: 200"
      console.log("response status is: ");

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

  getBlocks();

  return (
    <AppContainer>
      <Nav />
      <Row>
        <Wallet />
        <BlockchainStatus />
      </Row>
      <Blocks />
      <Footer />
    </AppContainer>
  );
}

export default App;
