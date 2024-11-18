import React from "react";
import { useState } from "react";
const Form = () => {
  const [input, setInput] = useState({});
  function handleChange(event) {
    const name=event.target.name
    const value=event.target.value
    setInput(values=>({...values,[name]:value}))
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log('===========>',input);
    
  }
  return (
    <div className="container-fluid py-5">
      <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center">
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
          ></input>
        </label>
    {/* <button type="submit">submit</button> */}
        <input type="submit" />
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
