import React from "react";
import "./App.css";
import Intro from "./pages/intro";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/main/Signin";
import SignUp from "./pages/main/Signup";
import AddModal from "./pages/addModal";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/addpost" element={<AddModal />} />
      </Routes>
    </div>
  );
};

export default App;
