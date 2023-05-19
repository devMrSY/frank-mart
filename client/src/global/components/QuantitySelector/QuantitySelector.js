import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import quantitySelectorStyles from "./QunantitySelectorStyles";

const QuantitySelector = (props) => {
  const classes = quantitySelectorStyles;
  const [quantity, setQuantity] = useState(0);

  const handleDecrease = (product) => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
    props.addProduct(product, "-", quantity - 1);
  };

  const handleIncrease = (product) => {
    setQuantity(quantity + 1);
    props.addProduct(product, "+", quantity + 1);
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
