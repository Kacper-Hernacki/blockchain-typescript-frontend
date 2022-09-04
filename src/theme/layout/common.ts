import styled from "styled-components";
import {
  Button as MuiButton,
  Modal as MuiModal,
  Box as MuiBox,
} from "@mui/material";

export const AppContainer = styled.div``;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Button = styled(MuiButton)``;

export const Modal = styled(MuiModal)``;

export const Link = styled.a`
  text-decoration: none;
  color: black;
`;

export const Box = styled(MuiBox)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  border: 2px solid #000;
  box-shadow: 24px;
  padding: (2, 4, 3, 0);
  background-color: #fff;

  .MuiBox-root {
    border-radius: 16px !important;
  }
`;
