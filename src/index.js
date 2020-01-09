import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

// This is a comment for testing new keeper-john branch
// Second comment added by john

ReactDOM.render(
  <div>
    <Header />
    <Note />
    <Footer />
  </div>,
  document.getElementById("root")
);
