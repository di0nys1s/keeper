import React from "react";
import Home from "./Home";
import Register from "./RegisterLogin";

let isLogin = true;
let userIsRegistered = true;

const App = () => {
  return isLogin ? (
    <Home />
  ) : (
    <div className="container">
      <h1>Welcome to Keeper App</h1>
      <Register isRegistered={userIsRegistered} />
    </div>
  );
};

export default App;
