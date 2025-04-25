import { useLocation, useNavigate } from "react-router-dom";

import {
  SidebarIconContainer,
  SidebarItemContainer,
} from "./SidebarItem.style";
import { Typography } from "@mui/material";

type ISidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  route: string;
};

function SidebarItem({ icon, label, route }: ISidebarItemProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isRouteActive = location.pathname.includes(route);

  return (
    <SidebarItemContainer
      direction="column"
      spacing={2}
      justifyContent="center"
      onClick={() => navigate(route)}
    >
      <SidebarIconContainer selected={isRouteActive}>
        {icon}
      </SidebarIconContainer>
      <Typography variant="caption">{label}</Typography>
    </SidebarItemContainer>
  );
}

export default SidebarItem;
