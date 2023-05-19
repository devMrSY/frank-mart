import { StringConstants } from "./StringConstants";

class UrlConstants extends StringConstants {
  url_dev = "http://localhost:4000";

  adminViewPath = "/admin";
  productViewPath = "/product";

  API = "api";

  LOGIN = `${this.url_dev}/${this.API}/login`;
  SIGNUP = `${this.url_dev}/${this.API}/signup`;
  GETPRODUCTS = `${this.url_dev}/${this.API}/getProducts`;
}

let urls = new UrlConstants();
export default urls;
