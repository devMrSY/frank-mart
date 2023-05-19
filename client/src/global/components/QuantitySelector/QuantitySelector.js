import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import quantitySelectorStyles from "./QunantitySelectorStyles";
import { useSelector } from "react-redux";

const QuantitySelector = (props) => {
  const classes = quantitySelectorStyles;
  const cartProductFromRedux = useSelector((state) => state.user.cartData);
  const [quantity, setQuantity] = useState(getQuantity() ?? 0);

  function getQuantity() {
    let q = null;
    cartProductFromRedux.forEach((item) => {
      console.log(props.product.id, item.id, item.quantity);
      if (props.product.id == item.id) q = item.quantity;
    });
    return q;
  }

  const handleDecrease = (product) => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
    props.addProduct(product, quantity - 1);
  };

  const handleIncrease = (product) => {
    setQuantity(quantity + 1);
    props.addProduct(product, quantity + 1);
  };

  return (
    <Grid container display={"flex"} alignItems={"center"}>
      <Box sx={classes.qSBox}>
        <Grid item>
          <Button onClick={() => handleDecrease(props.product)}>-</Button>
        </Grid>
        <Typography component='span'>{quantity}</Typography>
        <Grid item>
          <Button onClick={() => handleIncrease(props.product)}>+</Button>
        </Grid>
      </Box>
    </Grid>
  );
};

export default QuantitySelector;
