import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErroBoundary from "ErrorHandling/ErrorBoundaries";
import SkeletonList from "Loader/SkeletonList";
import ErrorScreen from "ErrorHandling/ErrorScreen";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErroBoundary Fallback={<ErrorScreen />}>
      <App />
      {/* <SkeletonList /> */}
    </ErroBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
