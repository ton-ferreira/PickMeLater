import React, { useState } from "react";
import { Grid } from "@mui/material";

import QueueItem from "@features/queue/components/QueueItem";
import QueueItemEditor from "@features/queue/components/QueueItemEditor";
import { QueueItemPriority, QueueItemType } from "@models/queueItemEnums";
import { AppContent, MainContainer } from "./AppLayout.style";
import SidebarItem from "../SidebarItem";
import Sidebar from "../Sidebar";
import { BrowserRouter, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <MainContainer>
      <Sidebar />
      <AppContent>
        <Outlet />
        {/*           <QueueItemEditor
            id={"1"}
            name="Nightmare"
            notes={"Starts slow but get better"}
            priority={QueueItemPriority.High}
            type={QueueItemType.Movie}
            url="https://google.com/"
            open={false}
            onClose={() => setMobileOpen(false)}
          />
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <QueueItem
                id={"1"}
                name="Nightmare"
                notes={"Starts slow but get better"}
                priority={QueueItemPriority.High}
                type={QueueItemType.Movie}
                url="https://google.com/"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <QueueItem
                id={"2"}
                name="Pod'Pah"
                notes={"Starts slow but get better"}
                priority={QueueItemPriority.Low}
                type={QueueItemType.Podcast}
                url="https://google.com/"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <QueueItem
                id={"3"}
                name="Severance"
                notes={"Starts slow but get better"}
                priority={QueueItemPriority.Medium}
                type={QueueItemType.Series}
                url="https://google.com/"
              />
            </Grid>
          </Grid> */}
      </AppContent>
    </MainContainer>
  );
}

export default AppLayout;
