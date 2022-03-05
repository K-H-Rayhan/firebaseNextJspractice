import * as React from "react";
import { motion, useCycle } from "framer-motion";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { Divider } from "@mui/material";
import { userConext } from "../../contexts/userContext";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import { Hidden } from "@mui/material";
import app from "../../db/firebase";
import MenuItem from "@mui/material/MenuItem";
import styles from "../../styles/Hero.module.css";
import { getAuth } from "firebase/auth";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
export const pages = ["Product"];
const ResponsiveAppBar = () => {
  const [state, setState] = React.useState(false);
  const router = useRouter();
  const auth = getAuth(app);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [user, setUser] = React.useContext(userConext);
  const logout = () => {
    auth.signOut();
  };

  const toggleDrawer = (anchor, open) => (event) => {
    setState(!state);
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {pages.map((page) => (
          <ListItem button key={page} onClick={() => router.push("/products")}>
            {page}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: 0,
        color: "black",
        zIndex: 8,
        background: "#fff",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            onClick={() => router.push("/")}
          >
            VALORANT
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <div
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer("left", true)}
              color="inherit"
            >
              <MenuIcon />
            </div>
          </Box>
          {state ? (
            <Drawer
              anchor={"left"}
              open={state}
              onClose={toggleDrawer("left", false)}
            >
              {list("left")}
            </Drawer>
          ) : (
            ""
          )}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            onClick={() => router.push("/")}
          >
            VALORANT
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                onClick={() => router.push("/products")}
                key={page}
                sx={{ display: "block", color: "black" }}
                color="secondary"
              >
                {page}
              </Button>
            ))}
          </Box>

          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={user.photoURL} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Box sx={{ px: 2.5, pb: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontSize: 13 }}>
                    {user.displayName}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontSize: 11 }}
                    noWrap
                  >
                    {user.email}
                  </Typography>
                </Box>
                <Divider sx={{ borderStyle: "dashed" }} />
                <MenuItem sx={{ borderRadius: 1, mt: 1, mx: 0.5 }}>
                  <Typography textAlign="center" sx={{ fontSize: 13 }}>
                    Dashboard
                  </Typography>
                </MenuItem>
                <MenuItem sx={{ mx: 0.5, borderRadius: 1 }}>
                  <Typography textAlign="center" sx={{ fontSize: 13 }}>
                    Profile
                  </Typography>
                </MenuItem>
                <MenuItem sx={{ mx: 0.5, borderRadius: 1 }}>
                  <Typography textAlign="center" sx={{ fontSize: 13 }}>
                    Settings
                  </Typography>
                </MenuItem>
                <Divider sx={{ borderStyle: "dashed", mb: 0 }} />
                <MenuItem
                  onClick={() => {
                    logout();
                  }}
                  sx={{ mx: 0.5, borderRadius: 1 }}
                >
                  <Typography textAlign="center" sx={{ fontSize: 13 }}>
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Button
              component={motion.div}
              whileTap={{ scale: 0.9 }}
              onClick={() => router.push("/login")}
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default React.memo(ResponsiveAppBar);
