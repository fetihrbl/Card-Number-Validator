import React, { useState } from "react";
import "./App.css"; // CSS dosyasını ekliyoruz.
import validator from "validator";

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const validateCreditCard = (value) => {
    if (validator.isCreditCard(value)) {
      setErrorMessage("Valid CreditCard Number");
    } else {
      setErrorMessage("Enter valid CreditCard Number!");
    }
  };

  return (
    <div className="container">
      <h2>Validating CreditCard in ReactJS</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter CreditCard Number"
          onChange={(e) => validateCreditCard(e.target.value)}
        />
        <span
          className={`message ${
            errorMessage === "Valid CreditCard Number" ? "valid" : "invalid"
          }`}
        >
          {errorMessage}
        </span>
      </div>
    </div>
  );
};

export default App;
