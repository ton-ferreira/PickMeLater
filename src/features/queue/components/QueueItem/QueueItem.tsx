import { Chip, Grid, IconButton, Typography } from "@mui/material";
import { QueueItemPriority, QueueItemType } from "@models/queueItemEnums";
import QueueItemIcon from "../QueueItemIcon";
import { DeleteTwoTone, EditTwoTone } from "@mui/icons-material";
import {
  QueueItemContainer,
  QueueItemNoteText,
  QueueItemNoteWrapper,
} from "./QueueItem.styles";

type IQueueItem = {
  id: string;
  name: string;
  notes: string;
  priority: QueueItemPriority;
  type: QueueItemType;
  url?: string;
};

function QueueItem({ id, name, notes, priority, type, url }: IQueueItem) {
  return (
    <QueueItemContainer>
      <Grid container direction="column" gap={2} padding={2}>
        <Grid
          container
          direction="row"
          justifyContent={"space-between"}
          alignItems="flex-start"
        >
          <Grid container gap={2}>
            <Grid>
              <QueueItemIcon type={type} />
            </Grid>
            <Grid size="grow">
              <Typography color="textDisabled" fontSize={12}>
                {type}
              </Typography>
              <Typography fontWeight="bold" fontSize={20}>
                {name}
              </Typography>
            </Grid>
          </Grid>

          <Grid container direction="row" gap={1}>
            <IconButton size="small" aria-label="edit queue item">
              <EditTwoTone />
            </IconButton>
            <IconButton size="small" aria-label="delete queue item">
              <DeleteTwoTone />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container gap={1}>
          <Chip label={priority} color="secondary" variant="outlined" />
          <Chip label="Sci-fi" variant="outlined" />
          <Chip label="Drama" variant="outlined" />
        </Grid>
        <QueueItemNoteWrapper>
          <QueueItemNoteText fontSize={14} color="textDisabled">
            {notes}
          </QueueItemNoteText>
        </QueueItemNoteWrapper>
      </Grid>
    </QueueItemContainer>
  );
}

export default QueueItem;
