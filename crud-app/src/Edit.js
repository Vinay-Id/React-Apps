import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Form";

function Edit() {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setUser(response.data.name))
      .catch((error) => console.error("error occured while editing", "error"));
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.length > 0) {
      axios
        .put(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(() => navigate("/"))
        .catch((error) =>
          console.error("error occured while editing", "error")
        );
    } else {
      alert("please enter name");
    }
  };
  console.log(user);

  return (
    <div className="bg-gradient screen-size d-flex-content">
      <div className="card">
        <h2>Edit user</h2>
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

          {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="name"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </Form.Group> */}
          {/* <Button as="input" type="submit" value="Submit">Primary</Button>{' '} */}
          <br />
          <button type="submit" className="button-24">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
