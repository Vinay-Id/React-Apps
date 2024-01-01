import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div className="container">
      <form>
        <input type="text" placeholder="User Name" />
        <br />
        <input type="password" placeholder="password" name="" id="" />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Form;
