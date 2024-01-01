import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  const [data, setData] = useState({ username: "", password: "" });
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(data);
    setData({ username: "", password: "" });
  }
  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User Name"
          name="username"
          onChange={handleChange}
          value={data.username}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={data.password}
        />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Form;
