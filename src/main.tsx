import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Announcement from "./pages/Announcement.tsx";
import Layout from "./pages/Layout.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/announcement" element={<Announcement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
