import { StringConstants } from "./StringConstants";

class UrlConstants extends StringConstants {
  url_dev = "http://localhost:3004";

  loginViewPath = "/login";
  viewTaskViewPath = "/viewTask/";
  editTaskViewPath = "/editTask/";
  createTaskViewPath = "/createTask";
  jokeSpotViewPath = "/jokesSpot";

  LOGIN = `${this.url_dev}/login`;
  GET_ALL_TASK = `${this.url_dev}/tasks`;
  GET_TASK_BY_ID = `${this.url_dev}/tasks/`;
  DELETE_BY_USER_ID = `${this.url_dev}/tasks/`;
  CREATE_RESOURCE = `${this.url_dev}/tasks/`;
  UPDATE_RESOURCE = `${this.url_dev}/tasks/`;

  // AUTH
  LOGIN = `${this.url_dev}/auth`;
}

let urls = new UrlConstants();
export default urls;
