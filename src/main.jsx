import { createRoot } from "react-dom/client";
// import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from "react-router-dom";
import Main_router from "./Router/Main_router.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Main_router />
  </BrowserRouter>,
);
