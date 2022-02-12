import React from "react";
import { ThemeProvider } from "styled-components";

const themeLight = {
  colors: {
    white: "#fff",
    black: "#1e1e1e",
    red: "#c03c49",
    greyLight: "#f5f5f5",
    greyMedium: "#c0c0c0",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }) => <ThemeProvider theme={themeLight}>{children}</ThemeProvider>;

export default Theme;
