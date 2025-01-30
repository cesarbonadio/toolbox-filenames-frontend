import { useState, useEffect } from "react";
import { fetchFormatedFiles } from "../services/filesService";

/**
 * Custom hook to fetch formatted file data.
 *
 * @param {string|null} search - The filename to search for. If null, fetches all formatted files.
 * @returns {Object} Hook state containing:
 * @returns {Array} return.data - The fetched formatted files.
 * @returns {boolean} return.isLoading - Loading state, true when fetching.
 * @returns {string|null} return.error - Error message if fetching fails.
 * @returns {boolean} return.searchFile - Indicates whether a specific file is being searched.
 */
export const useFetchFormatedFiles = (search) => {
	const [data, setData] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [searchFile, setSearchFile] = useState(false);

	useEffect(() => {
		const fetchFiles = async () => {
			setLoading(true);
			setError(null);
			try {
				const data = await fetchFormatedFiles(search);
				if (data) {
					if (search) {
						setSearchFile(true);
					} else {
						setSearchFile(false);
					}
					setData(data);
				} else {
					setError("No se pudo obtener respuesta de o los archivos");
					setData([]);
				}
			} catch (err) {
				setError(`Error al obtener respuesta: ${err.message}`);
				setData([]);
			} finally {
				setLoading(false);
			}
		};

		fetchFiles();
	}, [search]);

	return { data, isLoading, error, searchFile };
};
