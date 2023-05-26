import urls from "../../../global/constants/UrlConstants";
import { getCallParams, makeCall } from "../../../utils/service";

export async function login() {
  try {
    const callParams = await getCallParams("GET");
    const response = await makeCall(urls.LOGIN, callParams);
    return response;
  } catch (error) {
    throw error;
  }
}
