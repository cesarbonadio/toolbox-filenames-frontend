import { useState, useEffect } from "react";
import { fetchFormatedFiles } from "../services/filesService";

export const useFetchFormatedFiles = (searchTerm) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //const [isSearchFormat, setIsSearchFormat] = useState(false);

  useEffect(() => {
    const fetchFiles = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchFormatedFiles(searchTerm);

        if (data) {
            setIsSearchFormat(false);
            setFiles(data);
        } else {
            setError("No se pudieron obtener los archivos");
            setFiles([]);
        }
      } catch (err) {
        setError(`Error al obtener archivos: ${err.message}`);
        setFiles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();

    // const debounceFetch = setTimeout(() => {
    //   fetchFiles();
    // }, 500);

    //return () => clearTimeout(debounceFetch);
  }, [searchTerm]);

  //return { files, loading, error, isSearchFormat };
  return { files, loading, error };
};