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
import { useDispatch, useSelector } from "react-redux";
import { cartData, total } from "../../../../../redux/userSlice";

const Product = (props) => {
  const cartProductFromRedux = useSelector((state) => state.user.cartData);
  const dispatch = useDispatch();
  let totalAmount = useSelector((state) => state.user.total) ?? 0;

  const addProduct = (currentProduct, currentQuantity, actionType) => {
    if (currentQuantity == -1) return;
    const products = JSON.parse(JSON.stringify(cartProductFromRedux));
    const isProduct = products.find(
      (product) => product?.id == currentProduct.id
    );
    if (isProduct?.id) {
      products.forEach((item) => {
        if (item.id == currentProduct.id) {
          item.id = currentProduct.id;
          item.quantity = currentQuantity;
        }
      });
    } else {
      products.push({
        ...currentProduct,
        id: currentProduct.id,
        quantity: currentQuantity,
      });
    }
    if (actionType == "+") totalAmount += +currentProduct.price;
    else {
      totalAmount -= +currentProduct.price;
      const index = products.findIndex(
        (item) => item.id == currentProduct.id && !item.quantity
      );
      if (index != -1) {
        products.splice(index, 1);
      }
    }
    dispatch(total(totalAmount));
    dispatch(cartData(products));
  };
  return (
    <Grid item lg={12} display={"flex"} height={"100%"}>
      <Card sx={{ width: "100%" }}>
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
