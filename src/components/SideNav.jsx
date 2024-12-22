import { Box, Typography, useTheme } from "@mui/material";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Link } from "react-router-dom";

function SideNav() {
  const theme = useTheme();
  return (
    <Sidebar
      style={{
        height: "100%",
        top: "auto",
      }}
      breakPoint="md"
      backgroundColor={theme.palette.neutral.light}
    >
      <Menu>
        <MenuItem component={<Link to="/" />} active icon={<DashboardIcon />}>
          <Typography variant="body2"> Dashboard</Typography>
        </MenuItem>
        <MenuItem
          component={<Link to="/form" />}
          active
          icon={<ContentPasteIcon />}
        >
          <Typography variant="body2"> Form</Typography>
        </MenuItem>
        <MenuItem
          component={<Link to="/list" />}
          active
          icon={<FormatListBulletedIcon />}
        >
          <Typography variant="body2"> List</Typography>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
export default SideNav;
