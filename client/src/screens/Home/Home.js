import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getEmployeeDetail } from "./HomeService";

// import landingPageStyles from "./LandingPage.styles";

const Home = (props) => {
  const userIdFromRedux = useSelector((state) => state.auth.userId);

  // useEffect(() => {
  //   init();
  // }, []);

  // const init = async () => {
  //   try {
  //     await getEmployeeDetail(userIdFromRedux).then((res) => console.log(res));
  //   } catch (error) {
  //     alert(error.message ?? error);
  //   }
  // };

  return <>Home</>;
};

export default Home;
