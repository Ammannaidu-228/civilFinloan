import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CivilFinal from "../assets/CivilFinal.jpg";
function Home() {
  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col">
        <div
          className="flex sm:h-[50rem] lg:h-[20rem] h-[35rem] px-6 pt-14 lg:px-8"
          style={{
            backgroundImage: `url(${CivilFinal})`,
          }}
        >
          <h2 className="text-5xl text-white p-3 w-[45rem]">
            {" "}
            if you're not making mistakes then you're not doing anything
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center p-3 mt-10">
          <h3 className="text-center text-5xl font-medium text-teal-700">
            An Hub For Your Financial Needs
          </h3>
          <h5 className="flex text-center text-xl lg:w-[45rem] mb-15 text-gray-900 mt-5">
            We offer the extensive array of services by providing loans to
            citizens, Money transfer, wealth management and also leading on
            providing micro loans to agriculture and small businesses in the
            rural regions
          </h5>
        </div>
      </div>
      <div className="lg:relative fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
