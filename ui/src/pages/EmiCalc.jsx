import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/20/solid";
const loanType = [
  {
    id: 1,
    name: "Wade Cooper",
  },
  {
    id: 2,
    name: "Arlene Mccoy",
  },
  {
    id: 3,
    name: "Devon Webb",
  },
];
const loanCode = [
  {
    id: 1,
    name: "Wade Cooper",
  },
  {
    id: 2,
    name: "Arlene Mccoy",
  },
  {
    id: 3,
    name: "Devon Webb",
  },
];
function EmiCalc() {
  const [type, setType] = useState(loanType[1]);
  const [code, setCode] = useState(loanCode[0]);
  const [formData, setFormData] = useState({
    type: type,
    code: code,
    loanAmount: "",
    tenure: "",
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
    <div className="h-screen lg:h-full">
      <div>
        <Navbar />
      </div>
      <div>
        <div className="flex  flex-1 lg:w-[35rem] w-[18rem] m-auto mt-10 rounded-xl shadow-2xl shadow-gray-500 border-teal-900  bg-gray-100 flex-col justify-center px-6 py-12 lg:px-8">
          <h3 className="text-center text-2xl mb-10 text-blue-600 font-bold">
            EMI Calculator
          </h3>
          <form action="#" method="POST" className="space-y-6 h-[30rem]">
            <Listbox
              value={loanType}
              onChange={(value) => {
                setType(value);
                setFormData({ ...formData, type: value });
              }}
            >
              <Label className="block text-sm/6 font-medium text-gray-900">
                Loan Type
              </Label>
              <div className="relative mt-2">
                <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                  <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                    <span className="block truncate">{type.name}</span>
                  </span>
                  <ChevronUpDownIcon
                    aria-hidden="true"
                    className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </ListboxButton>

                <ListboxOptions
                  transition
                  className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
                >
                  {loanType.map((loan) => (
                    <ListboxOption
                      key={loan.id}
                      name={loan.name}
                      value={loan.name}
                      className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
                    >
                      <div className="flex items-center">
                        <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">
                          {loan.name}
                        </span>
                      </div>

                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                        <CheckIcon aria-hidden="true" className="size-5" />
                      </span>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>
            <div>
              <Listbox
                value={loanCode}
                onChange={(value) => {
                  setCode(value);
                  setFormData({ ...formData, code: value });
                }}
              >
                <Label className="block text-sm/6 font-medium text-gray-900">
                  Code
                </Label>
                <div className="relative mt-2">
                  <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                    <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                      <span className="block truncate">{code.name}</span>
                    </span>
                    <ChevronUpDownIcon
                      aria-hidden="true"
                      className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </ListboxButton>

                  <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
                  >
                    {loanCode.map((lc) => (
                      <ListboxOption
                        key={lc.id}
                        name={lc.name}
                        value={lc.name}
                        className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
                      >
                        <div className="flex items-center">
                          <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">
                            {lc.name}
                          </span>
                        </div>

                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                          <CheckIcon aria-hidden="true" className="size-5" />
                        </span>
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </div>
              </Listbox>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="loanAmount"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Loan Amount
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="loanAmount"
                  name="loanAmount"
                  type="loanAmount"
                  required
                  onChange={handleChange}
                  value={formData.loanAmount}
                  autoComplete="loanAmount"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="tenure"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Tenure
              </label>
              <div className="mt-2">
                <input
                  id="tenure"
                  name="tenure"
                  type="tenure"
                  required
                  autoComplete="tenure"
                  onChange={handleChange}
                  value={formData.tenure}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1
                   -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2
                    focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex text-black justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm/6 font-semibold  shadow-xs hover:bg-yellow-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="lg:relative  fixed bottom-0 mt-15 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default EmiCalc;
