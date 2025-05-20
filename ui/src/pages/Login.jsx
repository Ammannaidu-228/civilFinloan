import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  const [login] = useState(true);
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      userId: "",
      password: "",
    })
  }
  return (
    <div className="bg-teal-100 w-full h-screen">
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
          <div className="flex min-h-full flex-1 lg:w-[35rem] w-[18rem] shadow-2xl shadow-teal-700 m-auto mt-10 rounded-xl bg-gray-100 border-0 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full  sm:max-w-sm">
              <h2 className=" text-2xl/9 font-semibold tracking-tight text-gray-900">
                Login
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="userId"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    User ID:
                  </label>
                  <div className="mt-2">
                    <input
                      id="userId"
                      name="userId"
                      type="userId"
                      required
                      onChange={handleChange}
                      value={formData.userId}
                      autoComplete="userId"
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
              {login ? (
                <p className="text-green-600 text-shadow-green-400 font-semibold mt-5 text-center">
                  Login Successfull !!! please wait for profile loading...
                </p>
              ) : (
                <p className="text-red-500 mt-5 font-semibold text-center">
                  Details do not exists in our database
                </p>
              )}
            </div>
          </div>
        </>
      </div>
      <div className="mt-5 fixed bottom-0  w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Login;
