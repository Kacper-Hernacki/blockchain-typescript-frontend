import styled from "styled-components";
import { WidgetsOutlinedIcon } from "../theme/layout/icons";
import { Block } from "./Block";

interface BlocksProps {
  blocks: Array<any>;
}

export function Blocks({ blocks }: BlocksProps) {
  return (
    <Container>
      <Header>
        <WidgetsOutlinedIcon />
        <Label>Blocks</Label>
      </Header>
      <Content>
        {blocks?.map((block) => {
          return <Block data={block} />;
        })}
      </Content>
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
