import React from "react";
import "./App.css";
import Intro from "./pages/intro";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/Sign/Signin";
import SignUp from "./pages/Sign/Signup";
import AddModal from "./pages/addModal";
import Main from "./pages/main";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/addpost" element={<AddModal />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;
