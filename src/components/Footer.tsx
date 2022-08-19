import styled from "styled-components";
interface FooterProps {}

export function Footer({}: FooterProps) {
  return (
    <Container>
      <Text>2022 Ⓒ</Text>
    </Container>
  );
}

const Container = styled.div`
  height: 50px;
  width: 100%;
  background-color: transparent;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 5px;
`;

const Text = styled.h6`
  color: #19283d;
`;
