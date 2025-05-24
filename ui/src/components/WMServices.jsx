import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function WMServices() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="lg:mx-20 mx-10 h-full mt-5 border-0">
        <h1 className="text-5xl mt-3">Wealth Management</h1>
        <h3 className="text-xl mt-5">
          We are providing significantservices for your betterment of your wealth management by experts
        </h3>
        <div>
          <h4 className="text-xl mt-5 mx-5 ">
            • DEMAT
            <br />
            • PAN
            <br />
            • NPS
            <br />
          </h4>
        </div>
      </div>
      <div className="fixed bottom-0 w-full mt-5">
        <Footer />
      </div>
    </div>
  );
}

export default WMServices;
