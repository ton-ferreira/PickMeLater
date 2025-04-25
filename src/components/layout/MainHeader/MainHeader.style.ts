import { Box } from "@mui/material";
import styled from "styled-components";

export const MainHeaderWrapper = styled(Box)`
  background: red;
  border-radius: 1.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 250px;
  width: 100%;
  background: #f7f7f2;
`;

export const MainHeaderIllustrationWrapper = styled(MainHeaderWrapper)`
  background: #e4e6c3;
  align-items: center;
`;

export const MainHeaderIllustration = styled.img`
  height: auto;
  width: 300px;
`;
