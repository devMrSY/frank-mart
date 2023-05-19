import { useSelector } from "react-redux";
import CustomDrawer from "./components/CutomDrawer";
import { Box, Divider, Grid, Typography } from "@mui/material";

const Cart = (props) => {
  const cartData = useSelector((state) => state.user.cartData);
  const totalAmount = useSelector((state) => state.user.total);

  const getBody = () => {
    return (
      <>
        <Grid container>
          {cartData.map((product) => {
            return product.quantity > 0 ? (
              <Grid
                item
                display={"flex"}
                sx={{
                  width: "100%",
                  justifyContent: "center",
                  fontSize: "18px",
                }}
              >
                <Grid item lg={4} sx={{ textAlign: "center" }}>
                  {product?.title}
                </Grid>
                <Grid
                  item
                  sx={{ textAlign: "center" }}
                  lg={4}
                >{`${product?.quantity} * ${product?.price}`}</Grid>
                <Grid item lg={4} sx={{ textAlign: "center" }}>
                  {product?.price * product?.quantity}
                </Grid>
              </Grid>
            ) : null;
          })}
        </Grid>
      </>
    );
  };

  const getTotal = () => {
    return (
      <>
        <Grid container>
          <Grid item md={4} textAlign={"center"}>
            Total
          </Grid>
          <Grid item md={4} textAlign={"center"}></Grid>
          <Grid item md={4} textAlign={"center"}>
            {totalAmount}
          </Grid>
        </Grid>
      </>
    );
  };
  return (
    <CustomDrawer
      isCustomDrawer={props.isCustomDrawer}
      setIsCustomDrawer={props.setIsCustomDrawer}
    >
      <>
        <Typography variant='h4' component='div' sx={{ textAlign: "center" }}>
          Cart
        </Typography>
        <Divider />
        <Box mx={2} mt={2}>
          {getBody()}
          <Divider sx={{ marginTop: "8px" }} />
          {!!cartData.length && getTotal()}
        </Box>
      </>
    </CustomDrawer>
  );
};

export default Cart;
