import * as React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { logout } from "../../redux/authSlice";
import LoginForm from "./Login/Login";
import NavBarStyle from "./NavBarStyle";

function Navbar() {
  const classes = NavBarStyle;
  const [isLoginModal, setIsLoginModal] = React.useState(false);
  const isAuthenticated = useSelector((state) => state.auth.authenticate);
  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();

  const getLogout = () => {
    dispatch(logout());
  };

  const getLoginAndLogout = () => {
    return isAuthenticated ? (
      <>
        <Typography
          variant='h6'
          component='div'
          sx={{ flexGrow: 1 }}
        ></Typography>
        <Box display={"flex"} alignItems={"center"} mx={2}>
          <Typography variant='h5' component='div' mr={2}>
            {"Hello " + userName}
          </Typography>
          <Button variant='contained' onClick={getLogout}>
            Logout
          </Button>
        </Box>
      </>
    ) : (
      <Box>
        <Typography
          variant='h6'
          component='div'
          sx={{ flexGrow: 1 }}
        ></Typography>
        <Button variant='contained' onClick={() => setIsLoginModal(true)}>
          Login
        </Button>
      </Box>
    );
  };

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          {getLoginAndLogout()}
          <ShoppingCartIcon className={classes.cartImage} />
        </Toolbar>
      </AppBar>
      {isLoginModal && (
        <LoginForm
          isLoginModal={isLoginModal}
          setIsLoginModal={setIsLoginModal}
        />
      )}
    </>
  );
}

export default Navbar;
