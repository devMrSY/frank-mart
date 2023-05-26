import urls from "../../global/constants/UrlConstants";
import { getCallParams, makeCall } from "../../utils/service";

export async function getTask() {
  try {
    const callParams = getCallParams("GET");
    const response = await makeCall(urls.GET_ALL_TASK, callParams);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function deleteTaskById(taskId) {
  try {
    const callParams = await getCallParams("DELETE");
    const response = await makeCall(
      urls.DELETE_BY_USER_ID + taskId,
      callParams
    );
    return response;
  } catch (error) {
    throw error;
  }
}
