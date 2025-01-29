import { useState, useEffect } from "react";
import { fetchFilesList } from "../services/filesService";

export const useFetchFilesList = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetchFilesList();
            if (!response.status === 200) throw new Error("Error al obtener los datos");
            const result = await response;
            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, fetchData };
};
