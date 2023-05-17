import { useState } from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Admin = (props) => {
  const [user, setUser] = useState({
    _id: "",
    first_name: "",
    last_name: "",
    email: "",
  });

  const userIdFromRedux = useSelector((state) => state.auth.userId);

  const getBody = () => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image='/static/images/cards/contemplative-reptile.jpg'
          title='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {"name =" + user.first_name + " " + user.last_name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {user.departmentIds.join(",")}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn More</Button>
        </CardActions> */}
      </Card>
    );
  };

  return getBody();
};

export default Admin;
