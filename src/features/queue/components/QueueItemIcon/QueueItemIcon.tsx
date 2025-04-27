import { QueueItemType } from "@models/queueItemEnums";
import { Box } from "@mui/material";
import BookTwoToneIcon from "@mui/icons-material/BookTwoTone";
import MovieTwoToneIcon from "@mui/icons-material/MovieTwoTone";
import TvTwoToneIcon from "@mui/icons-material/TvTwoTone";
import HeadphonesTwoToneIcon from "@mui/icons-material/HeadphonesTwoTone";
import ArticleIcon from "@mui/icons-material/Article";
import InsertDriveFileTwoToneIcon from "@mui/icons-material/InsertDriveFileTwoTone";
import PlayCircleFilledTwoToneIcon from "@mui/icons-material/PlayCircleFilledTwoTone";
import { queueItemTypeColors } from "@theme/queueItemColors";

type QueueItemIconProps = {
  type: QueueItemType;
};

const iconMap: Record<QueueItemType, React.ReactNode> = {
  [QueueItemType.Book]: <BookTwoToneIcon />,
  [QueueItemType.Movie]: <MovieTwoToneIcon />,
  [QueueItemType.Series]: <TvTwoToneIcon />,
  [QueueItemType.Video]: <PlayCircleFilledTwoToneIcon />,
  [QueueItemType.Podcast]: <HeadphonesTwoToneIcon />,
  [QueueItemType.Article]: <ArticleIcon />,
  [QueueItemType.Other]: <InsertDriveFileTwoToneIcon />,
};

function QueueItemIcon({ type }: QueueItemIconProps) {
  return (
    <Box
      sx={{
        width: 48,
        height: 48,
        borderRadius: "1rem",
        backgroundColor: queueItemTypeColors[type],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {iconMap[type]}
    </Box>
  );
}

export default QueueItemIcon;
