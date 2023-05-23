import { useEffect, useState } from "react";
import { getCallParams, makeCall } from "../../../../utils/service";
import urls from "../../../../global/constants/UrlConstants";
import Navbar from "../../../Navbar/Navbar";
import Carousel from "react-material-ui-carousel";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Product from "./Product/Product";

const ProductDetail = (props) => {
  const [productInfo, setProductInfo] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
    rating: "",
    brand: "",
    ["images/1"]: "",
    ["images/2"]: "",
    ["images/3"]: "",
  });
  const { id } = props.match.params;
  useEffect(() => {
    initProductDetails(id);
  }, []);
  const initProductDetails = async (productId) => {
    const body = {
      productId: productId,
    };
    try {
      const callParams = await getCallParams("POST", body);
      const response = await makeCall(urls.GETPRODUCTSBYPRODUCTID, callParams);
      setProductInfo(response.data);
    } catch (error) {
      alert(error.message);
    }
  };

  console.log(productInfo, "response");

  const getCarousel = () => {
    return (
      <Carousel>
        <img src={productInfo["images/1"]} width={"100%"} height={"300px"} />
        <img src={productInfo["images/2"]} width={"100%"} height={"300px"} />
        <img src={productInfo["images/3"]} width={"100%"} height={"300px"} />
      </Carousel>
    );
  };

  const getProductDetail = () => {
    return (
      <Grid container p={4}>
        <Grid item lg={6} p={2}>
          <Product product={productInfo} isHead={false} />
        </Grid>
        <Grid item lg={6} p={2}>
          <Card sx={{ width: "100%" }}>
            {props.isHead && (
              <CardMedia
                sx={{ height: 140 }}
                image={productInfo.title}
                title='green iguana'
              />
            )}
            <CardContent>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography gutterBottom variant='h4' component='div'>
                  Brand: {productInfo.brand}
                </Typography>
                <Typography gutterBottom variant='h5' component='div'>
                  Price: {productInfo.price}
                </Typography>
              </Box>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography gutterBottom variant='h5' component='div'>
                  Discount%: {productInfo.discountPercentage}
                </Typography>
                <Typography gutterBottom variant='h5' component='div'>
                  Stock: {productInfo.stock}
                </Typography>
              </Box>
              <Typography variant='body2' color='text.secondary'>
                {productInfo.description}
              </Typography>
            </CardContent>
            <CardActions justifyContent='center'>
              {/* <QuantitySelector
                product={productInfo}
                addProduct={addProduct}
              /> */}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  };

  const getBody = () => {
    return (
      <>
        <Navbar isAdmin={false} />
        {getCarousel()}
        {getProductDetail()}
      </>
    );
  };
  return getBody();
};

export default ProductDetail;
