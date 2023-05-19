import * as React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { logout } from "../../redux/authSlice";
import LoginForm from "./Login/Login";
import NavBarStyle from "./NavBarStyle";
import Cart from "../Cart/Cart";

function Navbar(props) {
  const classes = NavBarStyle;
  const [isLoginModal, setIsLoginModal] = React.useState(false);
  const [isCustomDrawer, setIsCustomDrawer] = React.useState(false);
  const isAuthenticated = useSelector((state) => state.auth.authenticate);
  const userName = useSelector((state) => state.user.userName);
  const cartData = useSelector((state) => state.user.cartData);
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
        <Button
          mx={2}
          variant='contained'
          onClick={() => setIsLoginModal(true)}
        >
          Login
        </Button>
      </Box>
    );
  };

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Frank Mart
          </Typography>
          {getLoginAndLogout()}
          {!props?.isAdmin && !!cartData.length && (
            <ShoppingCartIcon
              sx={classes.cartImage}
              onClick={() => setIsCustomDrawer(true)}
            />
          )}
          {!!cartData?.length && !props?.isAdmin && (
            <Typography component='span'>{cartData?.length}</Typography>
          )}
        </Toolbar>
      </AppBar>
      {isLoginModal && (
        <LoginForm
          isLoginModal={isLoginModal}
          setIsLoginModal={setIsLoginModal}
        />
      )}
      {
        <Cart
          isCustomDrawer={isCustomDrawer}
          setIsCustomDrawer={setIsCustomDrawer}
        />
      }
    </>
  );
}

export default Navbar;
