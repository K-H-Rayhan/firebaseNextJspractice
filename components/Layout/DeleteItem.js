import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/Shopping/shopping-actions";

const DeleteItem = ({ removeFromCart, item }) => {
  return (
    <DeleteIcon
      onClick={() => removeFromCart(item.item.id)}
      style={{ position: "absolute", right: "2px", cursor: "pointer" }}
    />
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(DeleteItem);
