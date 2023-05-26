import urls from "../../global/constants/UrlConstants";
import { getCallParams, makeCall } from "../../utils/service";

export async function getTaskById(taskId) {
  try {
    const callParams = await getCallParams("GET");
    const response = await makeCall(urls.GET_TASK_BY_ID + taskId, callParams);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function updateResource(body) {
  try {
    delete body.id;
    const callParams = await getCallParams("POST", body);
    const response = await makeCall(urls.UPDATE_RESOURCE, callParams);
    return response;
  } catch (error) {
    throw error;
  }
}
