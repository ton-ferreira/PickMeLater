import { Box, Grid } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { styled, Theme } from "@mui/material/styles";

export const SidebarItemContainer = styled(Grid)`
  display: grid;
  width: 5rem;
  gap: 0.5rem;
  height: 3.5rem;
  cursor: pointer;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const SidebarIconContainer = styled(Box)<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 2rem;
  border-radius: 1rem;

  background-color: ${({ theme, selected }) =>
    selected && theme.palette.primary.main};

  &:hover {
    background-color: ${({ theme, selected }) =>
      selected ? theme.palette.primary.main : theme.palette.action.hover};
  }
`;
