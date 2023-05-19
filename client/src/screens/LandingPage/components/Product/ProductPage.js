import { useEffect, useState } from "react";
import carouse1 from "../../../../assets/carousel/c1.jpg";
import carouse2 from "../../../../assets/carousel/c2.webp";
import carouse3 from "../../../../assets/carousel/c3.jpg";
import Carousel from "react-material-ui-carousel";
import { getProductDetails } from "./ProductService";
import { Grid } from "@mui/material";
import Product from "./Product/Product";
import { useSelector } from "react-redux";

const carouseImage = [carouse1, carouse2, carouse3];

const ProductPage = () => {
  const [productData, setProductData] = useState([]);
  const cartProductFromRedux = useSelector((state) => state.user.cartData);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const products = await getProductDetails();
      setProductData(products);
    } catch (error) {
      alert(error.message ?? error);
    }
  };
  const getCarousel = () => {
    return (
      <Carousel>
        {carouseImage.map((item, i) => (
          <img src={item} width={"100%"} height={"300px"} />
        ))}
      </Carousel>
    );
  };

  const getProductList = () => {
    return (
      <Grid container rowGap={2}>
        {productData.map((product) => (
          <Grid item lg={4}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <>
      {getCarousel()}
      {getProductList()}
    </>
  );
};

export default ProductPage;
