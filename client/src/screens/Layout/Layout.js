import layoutStyles from "./Layout.styles";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../../global/components/PrivateRoute/PrivateRoute";
import { Box } from "@mui/material";
import urls from "../../global/constants/UrlConstants";
import { useSelector } from "react-redux";
import ViewTaskPage from "../ViewTask/ViewTask";
import EditViewTaskPage from "../ViewTask/ViewTask";
import JokeSpotPage from "../JokeSpotPage/JokeSpotPage";
import EditTask from "../EditTask/EditTask";
import CreateTask from "../CreateTask/CreateTask";
import Navbar from "../Navbar/Navbar";

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
            path={urls.viewTaskViewPath}
            component={ViewTaskPage}
          />
          <PrivateRoute
            exact
            isLoggedIn={isAuthenticated}
            path={`${urls.editTaskViewPath}:taskId`}
            component={EditTask}
          />
          <PrivateRoute
            exact
            isLoggedIn={isAuthenticated}
            path={urls.createTaskViewPath}
            component={CreateTask}
          />
          <PrivateRoute
            exact
            isLoggedIn={isAuthenticated}
            path={urls.jokeSpotViewPath}
            component={JokeSpotPage}
          />
          <Route path={"/*"} component={() => <>PageNotFOound</>} />
        </Switch>
      </Box>
    );
  };

  const getLayout = () => {
    return (
      <>
        {isAuthenticated && <Navbar />}
        {getContent()}
        {/* {isLoading && <CustomLoader />} */}
      </>
    );
  };

  return getLayout();
};

export default Layout;
