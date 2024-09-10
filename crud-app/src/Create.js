import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Create = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.length > 0) {
      axios
        .post("https://jsonplaceholder.typicode.com/users", { user })
        .then(() => {
          toast.success("Updated successfull");
          setTimeout(() => {
            navigate("/");
          }, 1000);
        })
        .catch((error) => console.error("Error creating item:", error));
    } else {
      toast.error("please enter name");
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

      <ToastContainer />
    </div>
  );
};

export default Create;
