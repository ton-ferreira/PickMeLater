import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const QueueItemContainer = styled(Paper)`
  cursor: pointer;
  border-radius: 1rem !important;
`;

export const QueueItemNoteWrapper = styled(Grid)`
  width: 100%;
  overflow: hidden;
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.palette.tertiary.main};
  border-radius: 1.25rem;
`;

export const QueueItemNoteText = styled(Typography)`
  overflow: hidden;
  textoverflow: ellipsis;
  whitespace: nowrap;
`;
