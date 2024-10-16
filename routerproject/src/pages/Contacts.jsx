import React from "react";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contacts Page</h1>
      <div className="contact-buttons">
        <button onClick={() => navigate("info")}>Contacts Info</button>
        <button onClick={() => navigate("form")}>Contacts Form</button>
      </div>
    </div>
  );
};
export default Contacts;
