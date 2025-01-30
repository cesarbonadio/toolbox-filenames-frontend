import React, { useState, useEffect } from "react";
import { useFetchFilesList } from "../../hooks/useFetchFilesList";
import Form from 'react-bootstrap/Form';

const DropdownComponent = ({ onSelectionChange }) => {
  const { data, isLoading, error } = useFetchFilesList();
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);
    onSelectionChange(selectedOption);
  };

  useEffect(() => {}, [data]);

  return (
    <div>
      {isLoading ? (
        <p>Cargando opciones...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <Form.Select size="sm" value={selectedValue} onChange={handleChange}>
          <option value="">Seleccione una opción</option>
          {(data || {files: []})?.files.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Form.Select >
      )}
    </div>
  );
};

export default DropdownComponent;