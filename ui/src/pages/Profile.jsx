import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  const [login] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    mobileNo: "",
    password: "",
    fullName: "",
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
          <div className="flex shadow-2xl shadow-teal-500 min-h-full flex-1 lg:w-[35rem] w-[18rem] 
          m-auto mt-10 rounded-xl bg-gray-100 border-0 flex-col justify-center px-6 lg:px-8">
            <div>
              <form action="#" method="POST" className="space-y-6 mb-3">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm/6 mt-5 font-medium text-gray-900"
                  >
                    Username:
                  </label>
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="username"
                      onChange={handleChange}
                      value={formData.username}
                      required
                      autoComplete="username"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mobileNo"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Mobile No:
                  </label>
                  <div className="mt-2">
                    <input
                      id="mobileNo"
                      name="mobileNo"
                      type="mobileNo"
                      required
                      onChange={handleChange}
                      value={formData.mobileNo}
                      autoComplete="mobileNo"
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
                  <label
                    htmlFor="fullName"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Full Name:
                  </label>
                  <div className="mt-2">
                    <input
                      id="fullName"
                      name="fullName"
                      type="fullName"
                      required
                      onChange={handleChange}
                      value={formData.fullName}
                      autoComplete="fullName"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="flex text-black justify-center mt-2 rounded-md bg-yellow-500 px-3 py-1.5 text-sm/6 font-semibold  shadow-xs hover:bg-yellow-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    update
                  </button>
                </div>
              </form>
              {login ? (
                <p className="text-green-500 p-5 text-center">
                  Profile updated Successfully
                </p>
              ) : (
                <p className="text-red-500  text-center">
                  Details do not exists in our database
                </p>
              )}
            </div>
          </div>
        </>
      </div>
      <div className="fixed bottom-0 lg:relative  mt-5 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
