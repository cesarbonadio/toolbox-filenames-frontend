import React, { useEffect, useState } from "react";
import DynamicFilesTable from "../common/DynamicFilesTable";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFetchFilesList } from "../../hooks/useFetchFilesList";

const FileListComponent = () => {
  const headers = ["name"];

  const { data, isLoading, error, fetchData } = useFetchFilesList();
  const [processedData, setProcessedData] = useState([]);

  const handleFetchData = async () => {
    await fetchData();
  };

  useEffect(() => {
    if (data) {
      const modifiedData = data.files.map(fileName => ({
        name: fileName
      }));
      setProcessedData(modifiedData);
    }
  }, [data]);

  return (
    <div className="p-4 rounded-xl shadow-md max-w-xs mx-auto text-center mb-8">
      <Button onClick={handleFetchData} disabled={isLoading}>
        {isLoading ? "Loading..." : "Fetch Data"}
      </Button>
      <h2 className="text-xl font-bold">Toolbox fileformat requester</h2>
      <DynamicFilesTable headers={headers} data={processedData}/>
      {error && <p className="text-red-500">Error: {error}</p>}
    </div>
  );
};

export default FileListComponent;