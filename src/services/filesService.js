import makeRequest from "../utils/axiosRequester";

export const fetchFilesList = async () => {
  try {
    const response = await makeRequest({
        method: 'GET',
        url: '/files/list'
    })
    console.log(response);
    return response;
  } catch (error) {
    console.error(`Error get all files services: ${error}`);
  }
};

export const fetchFormatedFiles = async (fileName = null) => {
  try {
    const response = await makeRequest({
      method: 'GET',
      url: '/files/data',
      params: fileName ? { fileName } : {}
    });
    console.log("Formatted data: ", response);
    return response;
  } catch (error) {
    console.error(`Error to get formatted data files: ${error}`);
  }
};