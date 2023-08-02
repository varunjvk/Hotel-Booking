import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
import "../node_modules/react-bootstrap/dist/react-bootstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <App/>
  </>
);
