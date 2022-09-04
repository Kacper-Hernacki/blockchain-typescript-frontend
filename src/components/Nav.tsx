import styled from "styled-components";
interface NavProps {}

export function Nav({}: NavProps) {
  return (
    <Container>
      <Logo>Blockchain with typescript</Logo>
    </Container>
  );
}

const Container = styled.div`
  height: 50px;
  width: 100%;
  background-color: #66a3ff;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 5px;

  -webkit-box-shadow: 0px 15px 24px -9px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 15px 24px -9px rgba(66, 68, 90, 1);
  box-shadow: 0px 15px 24px -9px rgba(66, 68, 90, 1);
`;

const Logo = styled.h3`
  color: #19283d;
`;

const Text = styled.h6`
  color: #19283d;
`;
