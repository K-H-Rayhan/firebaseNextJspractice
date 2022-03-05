import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "./Navbar";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Avatar, Box, Drawer, List, ListItem, Typography } from "@mui/material";
import { connect } from "react-redux";
import DeleteItem from "./DeleteItem";
function Item({ toggleDrawer, anchor, cart }) {
  const sameItem = [];
  return (
    <Box sx={{ width: "40vh" }} role="presentation">
      <p style={{ textAlign: "center", fontSize: "28px", fontWeight: "bold" }}>
        Cart
      </p>
      <List>
        {cart.map((item, i) =>
          sameItem.includes(item.item.id)
            ? null
            : (sameItem.push(item.item.id),
              (
                <ListItem key={i}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={item.item.details.image}
                      style={{
                        width: "40px",
                        height: "40px",
                        marginRight: "15px",
                      }}
                    />
                    <p style={{ color: "black", width: "260px" }}>
                      {item.item.name}
                    </p>
                  </Box>
                  <DeleteItem item={item} />
                </ListItem>
              ))
        )}
      </List>
    </Box>
  );
}

export default Item;
