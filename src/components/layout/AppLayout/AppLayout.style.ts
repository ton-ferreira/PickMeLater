import { blueGrey } from "@mui/material/colors";
import { styled, Theme } from "@mui/material/styles";

export const MainContainer = styled("div")(({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexDirection: "row",
  backgroundColor: theme.palette.background.default,
  height: "100vh",
  width: "100vw",
}));

export const AppContent = styled("div")`
  max-width: 64rem;
  margin: 1rem auto;
  @media (max-width: 768px) {
    margin: 1rem 0.5rem;
  }
`;
