import strings from "../global/constants/StringConstants";

export const getCallParams = async (methodType, body) => {
  const paramBody =
    methodType === "POST" || methodType === "PATCH"
      ? { body: JSON.stringify(body) }
      : {};
  return {
    method: methodType,
    headers: strings.applicationJSON,
    ...paramBody,
  };
};

export const makeCall = async (callName, callParams, convertToJSON = true) => {
  try {
    let call = fetch(callName, callParams);
    let timeout = getTimeoutPromise();
    const response = await Promise.race([timeout, call]).catch((error) => {
      throw error;
    });
    let json;
    if (convertToJSON) {
      json = await response.json();
    }
    if (response && response.ok) {
      return json;
    }
    throw json;
  } catch (error) {
    throw error.message ?? "some error occured";
  }
};

export const getTimeoutPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        reject({
          error: true,
          message: "Something went wrong. Please reload the page.",
        }),
      30000 // 30 Seconds
    );
  });
};
