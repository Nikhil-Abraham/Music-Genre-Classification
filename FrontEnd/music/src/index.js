import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import App from "./App";
import Upload from "./Routes/Upload";
import Recent from "./Routes/Recent";
import Github from "./Routes/Github";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/recent" element={<Recent />} />
            <Route path="/github" element={<Github />} />
        </Routes>
    </BrowserRouter>
);
