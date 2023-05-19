import LoginForm from "./components/Login/Login";
import SignupForm from "./components/SignUp/Signup";
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

  const redirectPage = (role) => {
    switch (role) {
      case strings.ADMIN:
        return urls.adminViewPath;
      case strings.CUSTOMER:
        return urls.productViewPath;
      default:
        return urls.loginViewPath;
    }
  };

  const getComponentBasedOnURL = () => {
    const location = props.location?.pathname?.split("/")[1].toLowerCase();
    switch (location) {
      case strings.PRODUCT: {
        return <ProductPage />;
      }
      default: {
        history.push(urls.productViewPath);
      }
    }
  };

  const getLandingPage = () => {
    return (
      <>
        <Navbar isAdmin={false} />
        <Box mt={2}>{getComponentBasedOnURL()}</Box>
      </>
    );
  };

  if (isLoggedIn) {
    let url = redirectPage(user_type);
    history.push(url);
    return null;
  } else {
    return getLandingPage();
  }
};

export default LandingPage;
