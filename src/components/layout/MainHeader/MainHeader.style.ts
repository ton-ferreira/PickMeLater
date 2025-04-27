import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainHeaderWrapper = styled(Paper)`
  border-radius: 1.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 15.6rem;
  width: 100%;
`;

export const MainHeaderIllustrationWrapper = styled(MainHeaderWrapper)`
  background: ${({ theme }) => theme.palette.tertiary.main};
  align-items: center;
`;

export const MainHeaderIllustration = styled("img")`
  height: auto;
  width: 18.75rem;
`;
