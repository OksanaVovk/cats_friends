import { createTheme } from "@mui/material/styles";
export const Colors = {
  primary: "#00adb5",
  secondary: "#00c7c0",
  success: "#4caf50",
  info: "#00d5ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#22414d",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  white: "#fff",
  black: "#000",
};

// TODO: define overrides object to create theme
const overrides = {
  palette: {
    primary: { main: "#00adb5" },
    secondary: { main: "#00c7c0" },
    success: { main: "#4caf50" },
    info: { main: "#00d5ff" },
    danger: { main: "#FF5722" },
    warning: { main: "#FFC107" },
    dark: { main: "#22414d" },
    light: { main: "#aaa" },
    muted: { main: "#abafb3" },
    border: { main: "#DDDFE1" },
    inverse: { main: "#2F3D4A" },
    shaft: { main: "#333" },
    dove_gray: { main: "#d5d5d5" },
    body_bg: { main: "#f3f6f9" },
    white: { main: "#fff" },
    black: { main: "#000" },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "#22414d",
          fontSize: "14px",
        },
      },
    },
  },
};

// TODO: use overrides object to create theme
const theme = createTheme(overrides);

export { overrides };
export default theme;
