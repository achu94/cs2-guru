import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Router
import { BrowserRouter } from "react-router-dom";

// Layout
import Layout from "./Layout/index.jsx";

// Redux
import store from "./store/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <App />
        </Layout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
