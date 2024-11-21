import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";
const Form = () => {
  const [input, setInput] = useState({});

  useEffect(() => {
    const localData = localStorage.getItem("data");
    // console.log("************", localData);
    if (localData) {
      setInput(JSON.parse(localData));
    }
  }, []);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log("===========>", input);
    localStorage.setItem("data", JSON.stringify(input));
    toast.success("Success!.");
  }

  return (
    <div className="container-fluid py-5">
      {/* <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center align-items-center"
      >
        <label>
          Enter your name:
          <input
            type="text"
            name="username"
            value={input.username || ""}
            onChange={handleChange}
          />
        </label>

        <label>
          Enter your age:
          <input
            type="number"
            name="age"
            value={input.age || ""}
            onChange={handleChange}
          />
        </label>

        <input type="submit" />
      </form> */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="username"
              value={input.username || ""}
              onChange={handleChange}
              className="form-control"
              id="staticEmail"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              name="age"
              value={input.age || ""}
              onChange={handleChange}
              className="form-control"
              id="inputPassword"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <button type="submit" className="btn btn-primary mb-3">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

// import React, { useState } from "react";
// import axios from "axios";

// const Form = () => {
//   // Initialize the input state with default values for each field
//   const [input, setInput] = useState({
//     username: "",
//     age: ""
//   });

//   // Loading, error, and success states
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   // Handle form input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setInput((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Set loading state
//     setLoading(true);
//     setError(null);
//     setSuccess(false);

//     try {
//       // Send POST request to API (replace with your actual API endpoint)
//       const response = await axios.post("https://example.com/api/submit", input);

//       // If request is successful, handle the success
//       setSuccess(true);
//       setInput({ username: "", age: "" });  // Reset form

//     } catch (error) {
//       // If there is an error, set the error state
//       setError(error.response ? error.response.data.message : error.message);
//     } finally {
//       // Set loading state to false
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container-fluid py-5">
//       <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
//         <div>
//           <label>
//             Enter your name:
//             <input
//               type="text"
//               name="username"
//               value={input.username}
//               onChange={handleChange}
//               required
//             />
//           </label>
//         </div>

//         <div>
//           <label>
//             Enter your age:
//             <input
//               type="number"
//               name="age"
//               value={input.age}
//               onChange={handleChange}
//               required
//             />
//           </label>
//         </div>

//         {/* Display loading state */}
//         {loading && <p>Submitting...</p>}

//         {/* Display error message */}
//         {error && <p style={{ color: "red" }}>Error: {error}</p>}

//         {/* Display success message */}
//         {success && <p style={{ color: "green" }}>Form submitted successfully!</p>}

//         {/* Submit button */}
//         <button type="submit" className="btn btn-primary mt-3" disabled={loading}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;
