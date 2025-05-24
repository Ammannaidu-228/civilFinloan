import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MRServices() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="lg:mx-20 mx-10 h-full mt-5 border-0">
        <h1 className="text-5xl mt-3">Money Remittance</h1>
        <h3 className="text-xl mt-5">Secure, simple and most exciting way of your transactions to inter and intra regions</h3>
        <div>
          <h2 className="text-2xl mt-25">Type : Domestic</h2>
          <h4 className="text-xl mt-5 mx-5">
            • Minimum Amount: ₹ 2,500
            <br />
            • Maximum Amount: ₹ 25,000
            <br />
            • Tenure: NA(days/months)
            <br />
          </h4>
        </div>
                <div>
          <h2 className="text-2xl mt-25">Type: Inward</h2>
          <h4 className="text-xl mt-5 mx-5">
            • Minimum Amount: ₹ 5000,
            <br />
            • Maximum Amount: ₹ 10,000
            <br />
            • Tenure: NA (days/months)
            <br />
          </h4>
        </div>
      </div>
      <div className="w-full mt-5">
      <Footer/>

      </div>
    </div>
  );
}

export default MRServices;
