import MainHeader from "@components/layout/MainHeader";
import readingDoodle from "../../../assets/reading-doodle.png";
import QueueItem from "@features/queue/components/QueueItem";
import { QueueItemPriority, QueueItemType } from "@models/queueItemEnums";
import QueueItemEditor from "@features/queue/components/QueueItemEditor";
import { Grid, Typography } from "@mui/material";

function Home() {
  return (
    <Grid container spacing={3} direction="column">
      <MainHeader
        description="All your saved content, in one place. Prioritize, explore, and come back later—on your terms."
        illustration={readingDoodle}
        title="Your items"
      />
      <Typography variant="h5" fontWeight="bold">
        Check what you're missing
      </Typography>
      {/* <QueueItemEditor
        id={"1"}
        name="Nightmare"
        notes={"Starts slow but get better"}
        priority={QueueItemPriority.High}
        type={QueueItemType.Movie}
        url="https://google.com/"
        open={false}
        onClose={() => {}}
      /> */}
      <Grid container spacing={2}>
        <Grid item size={{ xs: 12, md: 4 }}>
          <QueueItem
            id={"1"}
            name="Nightmare"
            notes={"Starts slow but get better"}
            priority={QueueItemPriority.High}
            type={QueueItemType.Movie}
            url="https://google.com/"
          />
        </Grid>
        <Grid item size={{ xs: 12, md: 4 }}>
          <QueueItem
            id={"2"}
            name="Pod'Pah"
            notes={"Starts slow but get better"}
            priority={QueueItemPriority.Low}
            type={QueueItemType.Podcast}
            url="https://google.com/"
          />
        </Grid>
        <Grid item size={{ xs: 12, md: 4 }}>
          <QueueItem
            id={"3"}
            name="Severance"
            notes={"Starts slow but get better"}
            priority={QueueItemPriority.Medium}
            type={QueueItemType.Series}
            url="https://google.com/"
          />
        </Grid>
        <Grid item size={{ xs: 12, md: 4 }}>
          <QueueItem
            id={"3"}
            name="Severance"
            notes={"Starts slow but get better"}
            priority={QueueItemPriority.Medium}
            type={QueueItemType.Series}
            url="https://google.com/"
          />
        </Grid>
        <Grid item size={{ xs: 12, md: 4 }}>
          <QueueItem
            id={"1"}
            name="Nightmare"
            notes={"Starts slow but get better"}
            priority={QueueItemPriority.High}
            type={QueueItemType.Movie}
            url="https://google.com/"
          />
        </Grid>
        <Grid item size={{ xs: 12, md: 4 }}>
          <QueueItem
            id={"3"}
            name="Severance"
            notes={"Starts slow but get better"}
            priority={QueueItemPriority.Medium}
            type={QueueItemType.Series}
            url="https://google.com/"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
