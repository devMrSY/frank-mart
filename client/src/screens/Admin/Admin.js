import { useState } from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Navbar from "../Navbar/Navbar";

const Admin = (props) => {
  const [user, setUser] = useState({
    _id: "",
    first_name: "",
    last_name: "",
    email: "",
  });

  const userIdFromRedux = useSelector((state) => state.auth.userId);

  const getBody = () => {
    return <Navbar isAdmin={true} />;
  };

  return getBody();
};

export default Admin;
