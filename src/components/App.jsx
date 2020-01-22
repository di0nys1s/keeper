import React from "react";
import Home from "./Home";
import RegisterLogin from "./RegisterLogin";

let isLogin = true;
let userIsRegistered = true;

const App = () => {
  return isLogin ? (
    <Home />
  ) : (
    <div className="container">
      <h1>Welcome to Keeper App</h1>
      <RegisterLogin isRegistered={userIsRegistered} />
    </div>
  );
};

export default App;
