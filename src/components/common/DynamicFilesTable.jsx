import React from "react";
import Table from "react-bootstrap/Table";

const DynamicFilesTable = ({ headers, data }) => {
  return (
    <div className="p-4 border rounded-xl shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-center">Dynamic Table</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td key={colIndex}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DynamicFilesTable;