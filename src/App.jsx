import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import theme from "./config/theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import SideNav from "./components/SideNav";
import AppHeader from "./components/AppHeader";
import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router/AppRoutes";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <BrowserRouter>
            <ProSidebarProvider>
              <AppHeader />
              <Box sx={styles.container}>
                <SideNav />
                <Box component={"main"} sx={styles.mainSection}>
                  <AppRoutes />
                </Box>
              </Box>
            </ProSidebarProvider>
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </React.Fragment>
  );
}

/**@type {import(@mui/material/).SxProps} */
const styles = {
  container: {
    display: "flex",
    bgcolor: "neutral.light",
    height: "calc(100% - 64px)",
  },
  mainSection: {
    p: 1,
    width: "100%",
    height: "100%",
    overflow: "auto",
  },
};

export default App;
