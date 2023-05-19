import layoutStyles from "./Layout.styles";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../../../global/components/PrivateRoute/PrivateRoute";
import { Box, Button } from "@mui/material";
import urls from "../../../global/constants/UrlConstants";
import { useSelector } from "react-redux";
import Admin from "../../Admin/Admin";

const Layout = () => {
  const classes = layoutStyles;

  const isAuthenticated = useSelector((state) => state.auth.authenticate);

  const getContent = () => {
    return (
      <Box sx={classes.content}>
        <Switch>
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

  const getLayout = () => {
    return (
      <>
        {getContent()}
        {/* {isLoading && <CustomLoader />} */}
      </>
    );
  };

  return getLayout();
};

export default Layout;
