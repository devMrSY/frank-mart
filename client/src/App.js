import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./screens/LandingPage/LandingPage";
import { Box } from "@mui/material";
import urls from "./global/constants/UrlConstants";
import Layout from "./screens/shared/Layout/Layout";
import ProductDetail from "./screens/LandingPage/components/Product/ProductDetails";

const App = () => {
  return (
    <Box>
      <Router>
        <Switch>
          <Route
            exact
            path={["/", urls.productViewPath]}
            component={LandingPage}
          />
          <Route
            exact
            path={`${urls.productDetailsViewPath}/:id`}
            component={ProductDetail}
          />
          <Layout />
        </Switch>
      </Router>
    </Box>
  );
};

export default App;
