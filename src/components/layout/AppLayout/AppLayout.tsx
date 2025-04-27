import { AppContent, MainContainer } from "./AppLayout.style";

import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <MainContainer>
      <Sidebar />
      <AppContent>
        <Outlet />
      </AppContent>
    </MainContainer>
  );
}

export default AppLayout;
