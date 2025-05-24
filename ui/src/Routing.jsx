import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import About from "./pages/About";
import EmiCalc from "./pages/EmiCalc";
import Member from "./pages/Member";
import ErrorPage from "./pages/ErrorPage";
import SCBServices from "./components/SCBServices";
import MFServices from "./components/MFServices";
import MRServices from "./components/MRServices";
import WMServices from "./components/WMServices";
function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/emi" element={<EmiCalc />} />
        <Route path="/member" element={<Member />} />
        <Route path="/services/SCB" element={<SCBServices />} />
        <Route path="/services/MF" element={<MFServices />} />
        <Route path="/services/MR" element={<MRServices />} />
        <Route path="/services/WM" element={<WMServices />} />

        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default Routing;
