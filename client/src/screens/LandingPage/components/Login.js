import { useState } from "react";
import { useDispatch } from "react-redux";
import { loggedIn, userId } from "../../../redux/authSlice";
import { Box, Button, Modal, TextField } from "@mui/material";
import { login } from "./LoginService";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleFieldChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await login();
      const { email, password } = response[0];
      if (email == credentials.email && password == credentials.password) {
        alert("login");
      } else alert("wrond cred.");
      dispatch(loggedIn(true));
    } catch (error) {
      alert(error);
    }
  };

  const getBody = () => {
    return (
      <form>
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            label="Email"
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleFieldChange}
            required
            sx={{ marginBottom: 3 }}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleFieldChange}
            required
            sx={{ marginBottom: 3 }}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Sign In
          </Button>
        </Box>
      </form>
    );
  };

  return getBody();
};

export default LoginPage;
