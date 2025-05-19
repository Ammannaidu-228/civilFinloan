import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
function Member() {

    const[formData, setFormData] = useState({
        username: "",
        mobileNo: "",
        password: "",
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData)
    }
  return (
    <div className="bg-teal-100">
        <div >
<Navbar/>
        </div>
        <div className="flex min-h-full flex-1 lg:w-[35rem] shadow-2xl shadow-teal-900 m-auto mt-10 rounded-xl bg-gray-100 border-0 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full  sm:max-w-sm">
          <h2 className=" text-2xl/9 font-light tracking-tight text-gray-900">
            Join as a member
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form  className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  autoComplete="username"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="mobileNo" className="block text-sm/6 font-medium text-gray-900">
                Mobile No:
              </label>
              <div className="mt-2">
                <input
                  id="mobileNo"
                  name="mobileNo"
                  type="mobileNo"
                  required
                  value={formData.mobileNo}
                  onChange={handleChange}
                  autoComplete="mobileNo"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex  justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-yellow-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
        <div className="mt-20">
            <Footer/>
        </div>
    </div>
  );
}

export default Member;
