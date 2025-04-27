import ModeNightTwoToneIcon from "@mui/icons-material/ModeNightTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import { IconButton, useColorScheme } from "@mui/material";

function ThemeToggle() {
  const { mode, setMode } = useColorScheme();
  const Icon = mode === "dark" ? LightModeTwoToneIcon : ModeNightTwoToneIcon;

  const handleThemeChange = () => {
    const newTheme = mode === "dark" ? "light" : "dark";
    console.log(newTheme);
    setMode(newTheme);
  };

  return (
    <IconButton onClick={handleThemeChange}>
      <Icon />
    </IconButton>
  );
}

export default ThemeToggle;
