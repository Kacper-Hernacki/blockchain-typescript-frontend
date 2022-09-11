import styled from "styled-components";

interface BlockData {
  timestamp: string;
  transactions: Array<any>;
  previousHash: string;
  hash: string;
  nonce: number;
  signature: string;
  validator: string;
}

interface BlockProps {
  data: any;
}

export function Block({ data }: BlockProps) {
  const {
    timestamp,
    transactions,
    previousHash,
    hash,
    nonce,
    signature,
    validator,
  }: BlockData = data;

  return (
    <Container>
      <Text>
        timestamp: <span>{timestamp}</span>
      </Text>
      <Text>
        previous hash: <span>{previousHash}</span>
      </Text>
      <Text>
        hash: <span>{hash}</span>
      </Text>
      <Text>
        signature:<span> {signature}</span>
      </Text>
    </Container>
  );
}

const Container = styled.div`
  background-color: #235093b8;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 20px;
  border-radius: 16px;
  width: 250px;
  height: 250px;
`;

const Text = styled.h6`
  color: #19283d;
  width: 100%;
  word-wrap: break-word;
  margin-bottom: 5px;

  span {
    color: #ededed;
    font-weight: 500;
  }
`;
