import { useState, useEffect } from 'react'
import { fetchFilesList } from '../services/filesService'

/**
 * Custom hook to fetch the list of files from the server.
 *
 * @function useFetchFilesList
 * @returns {Object} The state of the request.
 * @returns {Object|null} return.data - The fetched data containing the list of files, or null if not available.
 * @returns {boolean} return.isLoading - Indicates if the request is still in progress.
 * @returns {string|null} return.error - The error message if the request fails, or null if there's no error.
 */
export const useFetchFilesList = () => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchFilesList()
        if (!response.status === 200) { throw new Error('Error al obtener los datos') }
        const result = await response
        setData(result)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, isLoading, error }
}
