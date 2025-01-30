import React, { useEffect, useState } from "react";
import DynamicFilesTable from "../common/DynamicFilesTable";
import { useFetchFormatedFiles } from "../../hooks/useFetchFormatedFiles";
import { CustomSpinner } from "../common/Spinner";
import DropdownComponent from "../common/DropdownComponent";

const FileDataComponent = () => {
	const headers = ["name", "text", "number", "hex"];

	const [refresh, setRefresh] = useState(0);
	const { data, isLoading, error, searchFile } =
		useFetchFormatedFiles(refresh);

	useEffect(() => {}, [data, isLoading]);

	const handleUpdate = (selectedValue) => {
		setRefresh(selectedValue);
	};

	return (
		<div className="p-4 rounded-xl shadow-md max-w-xs mx-auto text-center mb-8">
			<h3 className="text-xl font-bold mb-4">
				Todos los archivos formateados
			</h3>
			<DropdownComponent onSelectionChange={handleUpdate} />
			<div
				style={{
					height: "calc(100vh - 500px)",
					overflowY: "auto",
				}}
			>
				{isLoading ? (
					<CustomSpinner />
				) : (data || []).length > 0 ? (
					data.map((f) => (
						<DynamicFilesTable
							title={f.file}
							key={f.file}
							headers={headers}
							data={f.lines}
							fixedValues={{ name: f.file }}
						/>
					))
				) : (
					<p>No hay datos disponibles.</p>
				)}
				{error && <p className="text-red-500">Error: {error}</p>}
			</div>
		</div>
	);
};

export default FileDataComponent;
