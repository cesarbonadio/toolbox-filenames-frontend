import React from "react";
import { Spinner } from "react-bootstrap";

export const CustomSpinner = () => {
	return (
		<div className="d-flex flex-column align-items-center justify-content-center flex-grow-1 py-5">
			<Spinner
				animation="border"
				variant="danger"
				style={{ width: "4rem", height: "4rem" }}
			/>
			<p className="mt-3 text-muted" style={{ fontSize: "1.2rem" }}>
				Cargando datos, por favor espera...
			</p>
		</div>
	);
};
