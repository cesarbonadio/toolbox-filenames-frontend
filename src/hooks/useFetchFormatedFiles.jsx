import { useState, useEffect } from "react";
import { fetchFormatedFiles } from "../services/filesService";

export const useFetchFormatedFiles = () => {
	const [data, setData] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	//const [isSearchFormat, setIsSearchFormat] = useState(false);

	useEffect(() => {
		const fetchFiles = async () => {
			setLoading(true);
			setError(null);
			try {
				const data = await fetchFormatedFiles();

				if (data) {
					//setIsSearchFormat(false);
					console.log("estoy aqui simba", data);
					setData(data);
				} else {
					setError("No se pudieron obtener los archivos");
					setData([]);
				}
			} catch (err) {
				setError(`Error al obtener archivos: ${err.message}`);
				setData([]);
			} finally {
				setLoading(false);
			}
		};

		fetchFiles();

		// const debounceFetch = setTimeout(() => {
		//   fetchFiles();
		// }, 500);

		//return () => clearTimeout(debounceFetch);
	}, []);

	//return { files, loading, error, isSearchFormat };
	return { data, isLoading, error };
};
