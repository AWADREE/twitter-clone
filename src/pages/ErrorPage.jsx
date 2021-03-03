import React from "react";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <div className="errorPage__boxBorder">
        <div className="errorPage__boxFiller">
          <div className="errorPage__box">
            <h1>Page Not Found</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
