import { StringConstants } from "./StringConstants";

class UrlConstants extends StringConstants {
  url_dev = "http://localhost:4000";

  loginViewPath = "/login";
  signupViewPath = "/signup";
  adminViewPath = "/admin";
  homeViewPath = "/home";
  productViewPath = "/product";

  API = "api";

  LOGIN = `${this.url_dev}/${this.API}/login`;
  SIGNUP = `${this.url_dev}/${this.API}/signup`;
  // GETADMINDETAIL = `${this.url_dev}/${this.API}/${this.ADMIN}/getDetailByUserId/`;
  // GETUSERDETAIl = `${this.url_dev}/${this.API}/${this.USER}/getDetailByUserId/`;
  GETPRODUCTS = `${this.url_dev}/${this.API}/getProducts`;
}

let urls = new UrlConstants();
export default urls;
