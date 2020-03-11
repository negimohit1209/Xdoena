import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";

import getTheme from "../../utils/theme";
import HomePage from "../../Pages/HomePage";

export default function AppLayout(props) {
  return (
    <MuiThemeProvider theme={getTheme("light")}>
      <CssBaseline />
      <HomePage {...props} />
    </MuiThemeProvider>
  );
}
