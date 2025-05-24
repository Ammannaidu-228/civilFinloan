import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../api/backendApi";
import { useNavigate } from "react-router-dom";
function Login() {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const [successResponse, setSuccessResponse] = useState("");
  const [errorResponse, setErrorResponse] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await api.post("/member/login", formData);
      console.log(response.data);
      if (response.status === 200) {
        setClick(true);
        alert(response?.data?.status);
        setSuccessResponse(response?.data?.status);
        navigate("/home");
        // Redirect to profile page or perform any other action
      }
    } catch (error) {
      console.error("Error logging in:", error);
      if (error.response) {
        setClick(false);
        setErrorResponse(error?.response?.data?.message);
      } else {
        setErrorResponse("An error occurred. Please try again.");
      }
    }
    console.log("Success response:", successResponse);
    console.log("Error response:", errorResponse);
    setFormData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="w-full lg:min-h-full h-screen">
      <div>
        <Navbar />
      </div>
      <div>
        <>
          {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
          <div className="flex  flex-1 lg:w-[35rem] w-[18rem] shadow-2xl shadow-gray-500 m-auto mt-5 rounded-xl bg-gray-100 border-0 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full  sm:max-w-sm">
              <h2 className=" text-2xl/9 font-semibold tracking-tight text-gray-900">
                Login
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Email:
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      onChange={handleChange}
                      value={formData.email}
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      onChange={handleChange}
                      value={formData.password}
                      autoComplete="current-password"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="flex  justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm/6 font-semibold text-black shadow-xs hover:bg-yellow-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Log in
                  </button>
                </div>
              </form>
              {click ? (
                <p className="text-green-600 text-shadow-green-400 font-semibold mt-5 text-center">
                  {successResponse}
                </p>
              ) : (
                <p className="text-red-500 p-1  font-semibold text-center">
                  {errorResponse}
                </p>
              )}
            </div>
          </div>
        </>
      </div>
          <div className="fixed bottom-0  w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Login;
