import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import zIndex from "@mui/material/styles/zIndex";
import { useProSidebar } from "react-pro-sidebar";

function AppHeader() {
  const { collapseSidebar, toggleSidebar, broken } = useProSidebar();
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#ffb3d9" }}>
      <Toolbar>
        <IconButton
          onClick={() => (broken ? toggleSidebar() : collapseSidebar())}
          color="secondary"
        >
          <MenuIcon sx={{ color: "black" }} />
        </IconButton>
        <Box componenet="img" sx={styles.applogo}>
          <img
            src="src/assets/logo2.png"
            alt="Example"
            style={{
              width: "100",
              height: "80",
              objectFit: "cover",
            }}
          />
        </Box>

        <Box sx={{ flexGrow: 1 }} />
        <IconButton title="notification" color="secondary">
          <Badge badgeContent={9} color="error">
            <NotificationsNoneIcon sx={{ color: "black" }} />
          </Badge>
        </IconButton>
        <IconButton title="setting" color="secondary">
          <SettingsIcon sx={{ color: "black" }} />
        </IconButton>
        <IconButton title="logout" color="secondary">
          <LogoutIcon sx={{ color: "black" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

/**@type {import(@mui/material/).SxProps} */
const styles = {
  appBar: {
    backgroundImage: "#ffcccc",
  },
  applogo: {
    borderRadius: 2,
    width: 100,
    height: 70,
    ml: 2,
    cursor: "pointer",
    paddingTop: 1,
    paddingRight: 10,
  },
};
export default AppHeader;
