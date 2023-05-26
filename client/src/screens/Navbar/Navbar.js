import * as React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../redux/authSlice";
import urls from "../../global/constants/UrlConstants";

function Navbar() {
  const isAuthenticated = useSelector((state) => state.auth.authenticate);
  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();
  const history = useHistory();

  const getLogout = () => {
    dispatch(logout());
  };

  const createtask = () => {
    history.push(urls.createTaskViewPath);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button
              variant="contained"
              onClick={() => history.push(urls.viewTaskViewPath)}
              sx={{ margin: "0px 12px" }}
            >
              Home Page
            </Button>
          </Typography>
          <Box display={"flex"} alignItems={"center"} mx={2}>
            <Typography variant="h5" component="div" mr={2}>
              {"Hello " + userName}
            </Typography>
            <Button
              variant="contained"
              onClick={createtask}
              sx={{ margin: "0px 12px" }}
            >
              Creat Task
            </Button>
            {isAuthenticated && (
              <Button variant="contained" onClick={getLogout}>
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
