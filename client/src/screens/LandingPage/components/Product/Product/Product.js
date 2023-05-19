import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import QuantitySelector from "../../../../../global/components/QuantitySelector/QuantitySelector";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartData } from "../../../../../redux/userSlice";

const Product = (props) => {
  const [cartProduct, setCartProuct] = useState();
  const [cartProductState, setCartProductState] = useState();
  const cartProductFromRedux = useSelector((state) => state.user.cartData);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartProductState(cartProductFromRedux);
  }, []);
  const addProduct = (currentProduct, actionType, currentQuantity) => {};
  return (
    <Grid item lg={12}>
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          image={props.product.thumbnail}
          title='green iguana'
        />
        <CardContent>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography gutterBottom variant='h4' component='div'>
              {props.product.title}
            </Typography>
            <Typography gutterBottom variant='h5' component='div'>
              {props.product.price}
            </Typography>
          </Box>
          <Typography variant='body2' color='text.secondary'>
            {props.product.description}
          </Typography>
        </CardContent>
        <CardActions justifyContent='center'>
          <QuantitySelector product={props.product} addProduct={addProduct} />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
