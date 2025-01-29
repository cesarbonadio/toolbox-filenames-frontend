import React, { useEffect, useState } from "react";
import DynamicFilesTable from "../common/DynamicFilesTable";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFetchFormatedFiles } from "../../hooks/useFetchFormatedFiles";

const FileDataComponent = () => {
  const headers = ["text","number","hex"];

  const { data, isLoading, error } = useFetchFormatedFiles();
  const [processedData, setProcessedData] = useState([]);

//   const handleFetchData = async () => {
//     await fetchData();
//   };

  useEffect(() => {
    console.log(data)
  }, [data]);

  return (
    <div className="p-4 rounded-xl shadow-md max-w-xs mx-auto text-center mb-8">
      {/* <Button onClick={handleFetchData} disabled={isLoading}>
        {isLoading ? "Loading..." : "Fetch Data"}
      </Button> */}
      {/* <h2 className="text-xl font-bold">Toolbox fileformat requester</h2>
      <DynamicFilesTable headers={headers} data={processedData}/>
      {error && <p className="text-red-500">Error: {error}</p>} */}
      a
    </div>
  );
};

export default FileDataComponent;