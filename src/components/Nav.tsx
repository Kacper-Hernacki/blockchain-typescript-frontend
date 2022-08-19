import styled from "styled-components";
interface NavProps {}

export function Nav({}: NavProps) {
  return <Container></Container>;
}

const Container = styled.div`
  height: 50px;
  width: 100%;
  background-color: red;
`;
