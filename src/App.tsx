import React, { useEffect, useState } from "react";
import axios from "axios";
// Components
import { Blocks, Nav, Wallet, Footer, BlockchainStatus } from "./components";
import { AppContainer, Row } from "./theme/layout/common";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://localhost:1337/api/blocks`);
        setData(response.data);
        setError(null);
      } catch (err: any) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  console.log("yeah", data, error);

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
