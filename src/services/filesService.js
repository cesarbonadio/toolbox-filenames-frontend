import makeRequest from '../utils/axiosRequester'

/**
 * Fetches the list of all available files from the server.
 *
 * @async
 * @function fetchFilesList
 * @returns {Promise<Object>} A promise that resolves with the response data containing the list of files.
 * @throws {Error} Logs an error message if the request fails.
 */
export const fetchFilesList = async () => {
  try {
    const response = await makeRequest({
      method: 'GET',
      url: '/files/list'
    })
    return response
  } catch (error) {
    console.error(`Error get all files services: ${error}`)
  }
}

/**
 * Fetches formatted file data from the server.
 *
 * @async
 * @function fetchFormatedFiles
 * @param {string|null} [fileName=null] - The name of the file to fetch formatted data for. If null, retrieves all formatted files.
 * @returns {Promise<Object>} A promise that resolves with the response data containing formatted file information.
 * @throws {Error} Logs an error message if the request fails.
 */
export const fetchFormatedFiles = async (fileName = null) => {
  try {
    const response = await makeRequest({
      method: 'GET',
      url: '/files/data',
      params: fileName ? { fileName } : {}
    })
    return response
  } catch (error) {
    console.error(`Error to get formatted data files: ${error}`)
  }
}
