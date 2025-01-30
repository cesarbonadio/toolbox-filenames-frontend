import React, { useEffect, useState } from "react";
import DynamicFilesTable from "../common/DynamicFilesTable";
import { useFetchFilesList } from "../../hooks/useFetchFilesList";

const FileListComponent = () => {
	const headers = ["name"];

	const { data, isLoading, error } = useFetchFilesList();
	const [processedData, setProcessedData] = useState([]);

	useEffect(() => {
		if (data) {
			const modifiedData = data.files.map((fileName) => ({
				name: fileName,
			}));
			setProcessedData(modifiedData);
		}
	}, [data]);

	return (
		<div className="p-4 rounded-xl shadow-md max-w-xs mx-auto text-center mb-8">
			<h4 className="text-xl font-bold">Lista de archivos</h4>
			<div
				style={{
					height: "calc(100vh - 500px)",
					overflowY: "auto",
				}}
			>
				<DynamicFilesTable headers={headers} data={processedData} />
			</div>

			{error && <p className="text-red-500">Error: {error}</p>}
		</div>
	);
};

export default FileListComponent;
