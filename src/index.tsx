import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from './App';
import reportWebVitals from "./reportWebVitals";
//import Hello from "./components/Hello";
//import Name from "./components/Name";
import Message from "./components/Message";

// ReactDOM.render(
//   <React.StrictMode>
//     <Hello />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const container = document.getElementById("root");
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      {/* <Hello /> */}
      {/* <Name /> */}
      <Message />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
