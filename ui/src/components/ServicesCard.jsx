import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ServicesCard() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="lg:mx-20 mx-10 h-full mt-5 border-0">
        <h1 className="text-5xl mt-3">Small Scale Business Loans</h1>
        <h3 className="text-xl mt-5">Providing loans which designed for your aspirations in starting a business</h3>
        <h2 className="text-2xl mt-25">Type: DI Loan</h2>
        <h4 className="text-xl mt-5 mx-5">
            • Minimum Amount: ₹ 10,000<br/>
            • Maximum Amount: ₹ 50,000<br/>
            • Tenure: 150 (days/months)<br/>
        </h4>
      </div>
      <div className="fixed bottom-0 w-full mt-5">
      <Footer/>

      </div>
    </div>
  );
}

export default ServicesCard;
