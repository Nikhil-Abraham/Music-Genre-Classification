import http from "../http-common";
const upload = (file, onUploadProgress) => {
  let formData = new FormData();
  formData.append("file", file);
  return http.post("http://localhost:8080/api/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

export default {
  upload,
};
