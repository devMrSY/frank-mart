import { StringConstants } from "./StringConstants";

class UrlConstants extends StringConstants {
  url_dev = "http://localhost:4000";

  adminViewPath = "/admin";
  productViewPath = "/product";
  productDetailsViewPath = "/productDetails";

  API = "api";

  LOGIN = `${this.url_dev}/${this.API}/login`;
  SIGNUP = `${this.url_dev}/${this.API}/signup`;
  GETPRODUCTS = `${this.url_dev}/${this.API}/getProducts`;
  GETPRODUCTSBYPRODUCTID = `${this.url_dev}/${this.API}/getProductsById`;
}

let urls = new UrlConstants();
export default urls;
