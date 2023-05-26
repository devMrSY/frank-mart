import urls from "../../global/constants/UrlConstants";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./components/Login";
import strings from "../../global/constants/StringConstants";
import Navbar from "../Navbar/Navbar";

const LandingPage = (props) => {
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.auth.authenticate);

  const getContent = () => {
    if (isLoggedIn) {
      history.push(urls.viewTaskViewPath);
      return null;
    } else {
      const location = props.location?.pathname?.split("/")[1].toLowerCase();
      switch (location) {
        case strings.LOGIN: {
          return <LoginPage />;
        }
        default: {
          history.push(urls.viewTaskViewPath);
          return null;
        }
      }
    }
  };

  const getBody = () => {
    return <>{getContent()}</>;
  };
  return getBody();
};

export default LandingPage;
