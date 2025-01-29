import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FileListComponent from "../../components/Files/FileListComponent";
import FileDataComponent from "../../components/Files/FileDataComponent";

const Files = () => {
  return (
    <div className="p-4 rounded-xl shadow-md max-w-xs mx-auto text-center mb-8">
      <Button as={Link} to="/" variant="danger">regresar</Button>
      <FileListComponent/>
      <FileDataComponent/>
    </div>
  );
};

export default Files;