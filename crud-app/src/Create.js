import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.length > 0) {
      axios
        .post("https://jsonplaceholder.typicode.com/users", { user })
        .then(() => navigate("/"))
        .catch((error) => console.error("Error creating item:", error));
    } else {
      alert("please enter name");
    }
  };

  return (
    <div className="bg-gradient screen-size d-flex-content">
      <div className="card">
        <h2>Create new user</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <label>
            Name:{" "}
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </label>
          <br />
          <button type="submit" className="button-24">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
