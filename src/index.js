import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

localStorage.clear();
localStorage.setItem("renderCountGPA", 0);
localStorage.setItem("renderCountGPB", 0);
localStorage.setItem("renderCountPA", 0);
localStorage.setItem("renderCountPB", 0);
localStorage.setItem("renderCountPC", 0);
localStorage.setItem("renderCountPD", 0);
localStorage.setItem("renderCountCA", 0);
localStorage.setItem("renderCountCB", 0);
localStorage.setItem("renderCountCC", 0);
localStorage.setItem("renderCountCD", 0);
localStorage.setItem("renderCountCE", 0);
localStorage.setItem("renderCountCF", 0);
localStorage.setItem("renderCountCG", 0);
localStorage.setItem("renderCountCH", 0);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
