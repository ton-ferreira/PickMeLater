import { Divider, Grid } from "@mui/material";
import SidebarItem from "../SidebarItem";
import { ROUTES } from "@app/routes";
import Logo from "../../../assets/logo.svg";
import { LogoIcon } from "./Sidebar.style";
import ThemeToggle from "@components/ui/ThemeToggle";

function Sidebar() {
  return (
    <Grid container>
      <Grid
        container
        sx={{ height: "100vh" }}
        direction="column"
        padding={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <LogoIcon src={Logo} />
        <Grid container gap={3} direction="column">
          {ROUTES.map((route) => (
            <SidebarItem
              icon={<route.icon />}
              label={route.label}
              route={route.path}
            />
          ))}
        </Grid>

        <ThemeToggle />
      </Grid>
      <Divider orientation="vertical" flexItem />
    </Grid>
  );
}

export default Sidebar;
