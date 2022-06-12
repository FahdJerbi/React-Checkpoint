import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar/navBar";
import Form from "./components/form/form";
import background from "./image/beach.jpg";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Navbar></Navbar>
      <header className="App-header">
        <div className="form-container">
          <Form></Form>
        </div>
      </header>
    </div>
  );
}

export default App;
