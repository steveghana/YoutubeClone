import React from "react";

type ErrorProps = any;
const ErrorScreen = ({ error }: ErrorProps) => {
  return (
    <div className="error">
      <h3>We are sorry Something went wrong</h3>
      <p>We cannot process your request at this moment</p>
      <pre>Error:{error?.message}</pre>
    </div>
  );
};

export default ErrorScreen;
