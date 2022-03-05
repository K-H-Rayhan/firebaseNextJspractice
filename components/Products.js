import React from "react";
import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { loadCurrentItem, addToCart } from "../redux/Shopping/shopping-actions";
function Products({ product, addToCart }) {
  return (
    <Box
      component={motion.div}
      whileHover={{ scale: 1.005, y: 2 }}
      sx={{
        bgcolor: "background.paper",
        boxShadow: 2,
        borderRadius: 2,
        p: 2,
        minWidth: 300,
        height: "400px",
        margin: "10px",
        width: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        "&:hover": {
          boxShadow: 9,
        },
      }}
    >
      <Box
        sx={{
          width: "200px",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={product.details.image} />
      </Box>
      <Box
        sx={{
          fontSize: "12px",
          ml: 2,
        }}
      >
        <p>{product.name}</p>
        <p style={{ fontWeight: "bold", marginTop: 2 }}>
          $ {product.details.price}
        </p>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            component={motion.div}
            whileTap={{ scale: 0.9 }}
            color="info"
            variant="contained"
            sx={{
              width: "60%",
              borderRadius: "200px",
              borderRadius: 2,
              fontSize: "12px",
              mt: 2,
            }}
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Products);
