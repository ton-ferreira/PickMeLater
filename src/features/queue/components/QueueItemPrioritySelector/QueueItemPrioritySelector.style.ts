import { styled, ToggleButton, ToggleButtonGroup } from "@mui/material";

export const QueueItemPriorityBtnGroup = styled(ToggleButtonGroup)`
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: 1.25rem !important;
  padding: 4px;
  display: flex;
  justify-content: center;
`;

export const QueueItemPriorityToggleBtn = styled(ToggleButton)`
  text-transform: none !important;
  border: none !important;
  gap: 0.5rem;
  color: #555;
  &:hover {
    background-color: red;
    color: black;
    border-radius: 20px !important;
  }

  &.Mui-selected {
    background-color: #fff !important;
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1) !important;
    color: #111 !important;
    border-radius: 1.25rem !important;
  }
`;
