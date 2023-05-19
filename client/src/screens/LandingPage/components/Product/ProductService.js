import urls from "../../../../global/constants/UrlConstants";
import { getCallParams, makeCall } from "../../../../utils/service";

export async function getProductDetails(id) {
  const body = {};
  try {
    const callParams = await getCallParams("GET", body);
    const response = await makeCall(urls.GETPRODUCTS, callParams);
    return response;
  } catch (error) {
    throw error;
  }
}
