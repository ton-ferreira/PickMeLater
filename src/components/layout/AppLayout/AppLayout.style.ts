import { Grid } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${blueGrey[50]};
  height: 100vh;
  width: 100vw;
`;

export const AppContent = styled.div`
  max-width: 64rem;
  margin: 1rem auto;
  @media (max-width: 768px) {
    margin: 1rem 0.5rem;
  }
`;
