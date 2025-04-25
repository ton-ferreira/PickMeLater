import { Divider, Grid } from "@mui/material";
import SidebarItem from "../SidebarItem";
import { ROUTES } from "@app/routes";

function Sidebar() {
  return (
    <Grid container>
      <Grid
        container
        sx={{ height: "100vh" }}
        direction="column"
        padding={2}
        gap={2}
        justifyContent="center"
      >
        {ROUTES.map((route) => (
          <SidebarItem
            icon={<route.icon />}
            label={route.label}
            route={route.path}
          />
        ))}
      </Grid>
      <Divider orientation="vertical" flexItem />
    </Grid>
  );
}

export default Sidebar;
