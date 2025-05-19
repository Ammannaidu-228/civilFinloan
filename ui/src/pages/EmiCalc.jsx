import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function EmiCalc() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="flex min-h-full flex-1 lg:w-[35rem] m-auto mt-10 rounded-xl shadow-2xl shadow-teal-900 border-teal-900  bg-gray-100 flex-col justify-center px-6 py-12 lg:px-8">
          <h3 className="text-center text-2xl text-blue-600 font-bold">
            EMI Calculator
          </h3>
          <form action="#" method="POST" className="space-y-6 h-[30rem]">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Loan Type
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Code
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Loan Amount
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Tenure
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex text-black justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm/6 font-semibold  shadow-xs hover:bg-yellow-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-15">
        <Footer />
      </div>
    </div>
  );
}

export default EmiCalc;
