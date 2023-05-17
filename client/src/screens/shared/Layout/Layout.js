import layoutStyles from "./Layout.styles";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../../../global/components/PrivateRoute/PrivateRoute";
import { Box, Button } from "@mui/material";
import urls from "../../../global/constants/UrlConstants";
import Home from "../../Home/Home";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/authSlice";
import Admin from "../../Admin/Admin";

const Layout = () => {
  const classes = layoutStyles;

  const isAuthenticated = useSelector((state) => state.auth.authenticate);
  const dispatch = useDispatch();

  const getLogout = () => {
    dispatch(logout());
  };

  const getContent = () => {
    return (
      <Box sx={classes.content}>
        <Switch>
          <PrivateRoute
            exact
            isLoggedIn={isAuthenticated}
            path={urls.homeViewPath}
            component={Home}
          />
          <PrivateRoute
            exact
            isLoggedIn={isAuthenticated}
            path={urls.adminViewPath}
            component={Admin}
          />
          <Route path={"/*"} component={() => <>PageNotFOound</>} />
        </Switch>
      </Box>
    );
  };

  const getLogoutButton = () => {
    return (
      <Button variant='contained' onClick={getLogout}>
        Logout
      </Button>
    );
  };

  const getLayout = () => {
    return (
      <>
        {isAuthenticated && getLogoutButton()}
        {getContent()}
        {/* {isLoading && <CustomLoader />} */}
      </>
    );
  };

  return getLayout();
};

export default Layout;
