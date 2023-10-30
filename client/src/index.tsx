import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';

import "./index.css";
import App from '../src/App.tsx';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router >
    <App/>
  </Router>
);
