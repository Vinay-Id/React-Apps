import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Form from "./Form";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        {/* <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/form">Form</Link>
              </li>
            </ul>
          </nav>
        </div> */}

        <ul className="nav nav-tabs mb-2">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/form" className="nav-link active">
              Form
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link active">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link active">
              About
            </Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/form" element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
