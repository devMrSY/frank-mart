import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loggedIn, token, userId, user_type } from "../../../redux/authSlice";
import { Box, Button, Modal, TextField } from "@mui/material";
import { login } from "./LoginService";
import urls from "../../../global/constants/UrlConstants";
import SignupForm from "../SignUp/Signup";
import { cartData, userName } from "../../../redux/userSlice";

const LoginForm = (props) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const handleFieldChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(credentials).then((res) => {
        dispatch(user_type(res.user_type));
        dispatch(token(res.token));
        dispatch(loggedIn(true));
        dispatch(userId(res.userId));
        dispatch(userName(res.userName));
      });
      props.setIsLoginModal(false);
    } catch (error) {
      alert(error.message ?? error);
    }
  };

  const getForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            label='Email'
            type='email'
            name='email'
            value={credentials.email}
            onChange={handleFieldChange}
            required
          />
          <TextField
            label='Password'
            type='password'
            name='password'
            value={credentials.password}
            onChange={handleFieldChange}
            required
          />
          <Button type='submit' variant='contained'>
            Sign In
          </Button>
          <Button variant='contained' onClick={() => setIsSignUp(true)}>
            Go to Sign up
          </Button>
        </Box>
      </form>
    );
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={props.isLoginModal}
        onClose={() => props.setIsLoginModal(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          {isSignUp ? (
            <SignupForm
              setIsSignUp={setIsSignUp}
              setIsLoginModal={props.setIsLoginModal}
            />
          ) : (
            getForm()
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default LoginForm;
