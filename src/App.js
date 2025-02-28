import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import About from "./components/About.js";
import React, { useState } from "react";
import Alert from "./components/Alert.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

let name = "Harry3";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* Corrected Route with element prop */}
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
