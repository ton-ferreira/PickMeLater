import { Box, Typography } from "@mui/material";
import { QueueItemPriority } from "@models/queueItemEnums";
import {
  QueueItemPriorityBtnGroup,
  QueueItemPriorityToggleBtn,
} from "./QueueItemPrioritySelector.style";
import { Control, Controller } from "react-hook-form";

type IQueueItemPrioritySelectorProps = {
  control: Control<any>;
  name: string;
};

const priorityOptions: {
  label: string;
  value: QueueItemPriority;
}[] = [
  { label: "Low", value: QueueItemPriority.Low },
  { label: "Medium", value: QueueItemPriority.Medium },
  { label: "High", value: QueueItemPriority.High },
];

function QueueItemPrioritySelector({
  control,
  name,
}: IQueueItemPrioritySelectorProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Box>
          <Typography fontWeight="bold" variant="overline">
            Priority
          </Typography>

          <QueueItemPriorityBtnGroup
            value={field.value}
            exclusive
            onChange={(_, newValue) => newValue && field.onChange(newValue)}
            fullWidth
          >
            {priorityOptions.map((option) => (
              <QueueItemPriorityToggleBtn
                key={option.value}
                value={option.value}
              >
                {option.label}
              </QueueItemPriorityToggleBtn>
            ))}
          </QueueItemPriorityBtnGroup>
        </Box>
      )}
    />
  );
}

export default QueueItemPrioritySelector;
