import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import AutoAwesomeTwoTone from "@mui/icons-material/AutoAwesomeTwoTone";
import { SvgIconComponent } from "@mui/icons-material";

type RouteItem = {
  label: string;
  icon: SvgIconComponent;
  path: string;
};

export const ROUTES: RouteItem[] = [
  {
    label: "Home",
    icon: DashboardTwoToneIcon,
    path: "home",
  },
  {
    label: "Discover",
    icon: AutoAwesomeTwoTone,
    path: "discover",
  },
];
