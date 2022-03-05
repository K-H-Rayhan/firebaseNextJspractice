import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "./Navbar";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Avatar, Box, Drawer, List, ListItem, Typography } from "@mui/material";
import { connect } from "react-redux";
import DeleteItem from "./DeleteItem";
import Item from "./Item";
function Layout({ children, cart }) {
  const [state, setState] = React.useState(false);
  const toggleDrawer = () => () => {
    setState(!state);
  };
  const list = (anchor) => <Item anchor={anchor} cart={cart} />;
  return (
    <div>
      <ResponsiveAppBar />
      {children}
      <Avatar
        sx={{
          width: 56,
          height: 56,
          backgroundColor: "white",
          boxShadow: 5,
          position: "fixed",
          left: "1rem",
          bottom: "1rem",
          cursor: "pointer",
          "&:hover": {
            boxShadow: 9,
          },
        }}
        onClick={toggleDrawer("left", false)}
      >
        <Avatar
          sx={{
            width: 13,
            height: 13,
            backgroundColor: "#1890FF",
            position: "absolute",
            cursor: "pointer",
            right: "8px",
            top: "7px",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "11px",
              fontWeight: "bold",
            }}
          >
            {cart.length}
          </Typography>
        </Avatar>
        <Drawer anchor={"right"} open={state}>
          {list("left")}
        </Drawer>
        <ShoppingCartOutlinedIcon sx={{ color: "black", fontSize: 24 }} />
      </Avatar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default React.memo(connect(mapStateToProps)(Layout));
