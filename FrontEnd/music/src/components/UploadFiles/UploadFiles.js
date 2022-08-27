import React, { useState, useEffect } from "react";
import UploadService from "../services/FileUploadService";


const UploadFiles = () => {
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(undefined);

    const selectFile = (event) => {
      setSelectedFiles(event.target.files);
    };

    const upload = () => {
      let currentFile = selectedFiles[0];
      setProgress(0);
      setCurrentFile(currentFile);
      UploadService.upload(currentFile, (event) => {
        setProgress(Math.round((100 * event.loaded) / event.total));
      })
        .then((response) => {
          setMessage(response.data.message);
          return UploadService.getFiles();
        })
        .then((files) => {
          setFileInfos(files.data);
        })
        .catch(() => {
          setProgress(0);
          setMessage("Could not upload the file!");
          setCurrentFile(undefined);
        });
      setSelectedFiles(undefined);
    };

  return (
    
  );
};
export default UploadFiles;