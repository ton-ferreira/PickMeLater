import { Box, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import styled from "styled-components";

export const QueueItemContainer = styled(Box)`
  cursor: pointer;
  border-radius: 1rem !important;
  background: #f7f7f2;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1) !important;
`;

export const QueueItemNoteWrapper = styled(Grid)`
  width: 100%;
  overflow: hidden;
  padding: 0.75rem 1rem;
  background: #e4e6c3;
  border-radius: 1.25rem;
`;

export const QueueItemNoteText = styled(Typography)`
  overflow: hidden;
  textoverflow: ellipsis;
  whitespace: nowrap;
`;
