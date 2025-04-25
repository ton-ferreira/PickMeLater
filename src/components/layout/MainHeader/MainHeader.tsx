import { Grid, Typography } from "@mui/material";
import {
  MainHeaderWrapper,
  IllustrationWrapper,
  MainHeaderIllustration,
  MainHeaderIllustrationWrapper,
} from "./MainHeader.style";

type IMainHeaderProps = {
  title: string;
  description: string;
  illustration: string;
};

function MainHeader({ title, description, illustration }: IMainHeaderProps) {
  return (
    <Grid container spacing={1}>
      <Grid container size={{ xs: 12, md: 6 }}>
        <MainHeaderWrapper>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5">{description}</Typography>
        </MainHeaderWrapper>
      </Grid>

      <Grid container size={{ xs: 12, md: 6 }}>
        <MainHeaderIllustrationWrapper>
          <MainHeaderIllustration src={illustration} alt="Illustration" />
        </MainHeaderIllustrationWrapper>
      </Grid>
    </Grid>
  );
}

export default MainHeader;
