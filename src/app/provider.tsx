import { useColorScheme } from "@mui/material/styles";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "@theme/customTheme";
type IAppProvider = {
  children: React.ReactNode;
};

export function AppProvider({ children }: IAppProvider) {
  const { mode } = useColorScheme();
  return (
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}
