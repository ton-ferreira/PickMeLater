import { QueueItemFormData } from "@features/queue/schemas/queueItem.schema";
import { QueueItemPriority, QueueItemType } from "@models/queueItemEnums";
import { Button, Dialog, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import QueueItemPrioritySelector from "../QueueItemPrioritySelector";
import FormTextInput from "@components/ui/FormTextInput";
import FormSelectInput from "@components/ui/FormSelectInput";

type IQueueItemEditor = {
  addedAt: Date;
  id: string;
  name: string;
  notes: string;
  priority: QueueItemPriority;
  type: QueueItemType;
  url?: string;
  open: boolean;
  onSubmit: (data: QueueItemFormData) => void;
  onClose: () => void;
};

function QueueItemEditor({
  open,
  addedAt,
  id,
  name,
  notes,
  priority,
  type,
  url,
  onSubmit,
  onClose,
}: IQueueItemEditor) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<QueueItemFormData>({
    defaultValues: { addedAt, id, name, notes, priority, type, url },
  });

  return (
    <Dialog open={open}>
      <Grid
        padding={4}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <QueueItemPrioritySelector control={control} name="priority" />
        <FormTextInput
          control={control}
          label="Name"
          name="name"
          rules={{
            required: "Insert the name of the item.",
            maxLength: {
              value: 30,
              message: "Name must be at most 30 characters.",
            },
          }}
        />
        <FormSelectInput
          control={control}
          label="type"
          name="type"
          rules={{ required: "Select the item type" }}
          options={Object.values(QueueItemType)}
        />

        <FormTextInput
          control={control}
          label="notes"
          multiline
          name="notes"
          rows={2}
          rules={{
            required: "Insert some meaningful note about your item.",
            maxLength: {
              value: 100,
              message: "Notes must be at most 100 characters.",
            },
          }}
        />

        <Grid container gap={{ xs: 1, md: 2 }} direction="row">
          <Button color="secondary" onClick={onClose} fullWidth>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={() => console.log(handleSubmit)}
            disabled={isSubmitting}
            fullWidth
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default QueueItemEditor;
