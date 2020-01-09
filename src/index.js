import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

// This is the test comment added in master branch
ReactDOM.render(
  <div>
    <Header />
    <Note />
    <Footer />
  </div>,
  document.getElementById("root")
);
