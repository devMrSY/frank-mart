import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./screens/LandingPage/LandingPage";
import { Box } from "@mui/material";
import urls from "./global/constants/UrlConstants";
import Layout from "./screens/Layout/Layout";

const App = () => {
  return (
    <Box>
      <Router>
        <Switch>
          <Route
            exact
            path={["/", urls.loginViewPath]}
            component={LandingPage}
          />
          <Layout />
        </Switch>
      </Router>
    </Box>
  );
};

export default App;
