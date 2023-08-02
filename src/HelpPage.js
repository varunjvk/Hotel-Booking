import React, { useState } from "react";
import "./Help.css"
function HelpPage() {
  // Define state variables for email and complaint
  const [email, setEmail] = useState("");
  const [complaint, setComplaint] = useState("");

  // Define a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default browser behavior
    // Do something with the email and complaint values, such as sending them to a server
    console.log("Email:", email);
    console.log("Complaint:", complaint);
    // Clear the input fields
    setEmail("");
    setComplaint("");
  };

  return (
    <div className="help-page">
      <h1>Help Page</h1>
      <p>Please fill out the form below to submit your complaint.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="complaint">Complaint:</label>
        <textarea
          id="complaint"
          name="complaint"
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HelpPage;
