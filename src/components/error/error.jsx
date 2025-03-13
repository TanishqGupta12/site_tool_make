"use client";
import "./error.css";

export default function Error({ error }) {
  console.log(error);
  
  return (
    <body className="loading">
      <div className="error-code">500</div>
      <div className="error-message">{ error?.message || "Unexpected Error"} <b>:(</b></div>
      <div className="gears">
        <div className="gear one">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="gear two">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="gear three">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </body>
  );
}