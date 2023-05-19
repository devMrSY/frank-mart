import strings from "../../global/constants/StringConstants";
import urls from "../../global/constants/UrlConstants";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Button, Paper, Slider } from "@mui/material";
import ProductPage from "./components/Product/ProductPage";
import Navbar from "../Navbar/Navbar";
import carouse1 from "../../assets/carousel/c1.jpg";
import carouse2 from "../../assets/carousel/c2.webp";
import carouse3 from "../../assets/carousel/c3.jpg";

const carouseImage = [carouse1, carouse2, carouse3];

const LandingPage = (props) => {
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.auth.authenticate);
  const user_type = useSelector((state) => state.auth.user_type);

  const getLandingPage = () => {
    return (
      <>
        <Navbar isAdmin={false} />
        <Box mt={2}>
          <ProductPage />
        </Box>
      </>
    );
  };

  if (isLoggedIn && user_type == strings.ADMIN) {
    history.push(urls.adminViewPath);
    return null;
  } else {
    return getLandingPage();
  }
};

export default LandingPage;
