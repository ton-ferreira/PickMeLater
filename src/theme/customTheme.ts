import { blueGrey } from "@mui/material/colors";
import { createTheme, ThemeOptions } from "@mui/material/styles";

const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 20,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 20,
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 16,
      },
    },
  },
};

const lightPalette: ThemeOptions["palette"] = {
  mode: "light",
  primary: {
    main: "#C5D86D",
  },
  secondary: {
    main: "#FE5778",
  },
  tertiary: {
    main: "#E4E6C3",
  },
  background: {
    default: blueGrey[50],
    paper: "#f7f7f2",
  },
  text: {
    primary: "#261c15",
    secondary: "#fe5778",
  },
};

const darkPalette: ThemeOptions["palette"] = {
  mode: "dark",
  primary: {
    main: "#54611A",
  },
  secondary: {
    main: "#fe345c",
  },
  tertiary: {
    main: "#63652A",
  },
  background: {},
  text: {
    primary: "#f7f7f2",
    secondary: "#fe5778",
  },
};

export const lightTheme = createTheme({
  palette: lightPalette,
  components,
});

export const darkTheme = createTheme({
  palette: darkPalette,
  components,
});
