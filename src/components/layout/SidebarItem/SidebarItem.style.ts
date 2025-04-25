import { Grid } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import styled from "styled-components";

export const SidebarItemContainer = styled(Grid)`
  display: grid;
  width: 5rem;
  height: 3.5rem;
  cursor: pointer;
`;

export const SidebarIconContainer = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 2rem;
  border-radius: 1rem;
  background: ${({ selected }) => selected && "#c5d86d"};

  &:hover {
    background: ${({ selected }) => (selected ? "#c5d86d" : blueGrey[100])};
  }
`;
