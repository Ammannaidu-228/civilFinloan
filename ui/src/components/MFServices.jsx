import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MFServices() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="lg:mx-20 mx-10 h-full mt-5 border-0">
        <h1 className="text-5xl mt-3">Micro Finance</h1>
        <h3 className="text-xl mt-5">Motivate the enterpreneurs across all small villages and rural areas by providing them a better support</h3>
        <h2 className="text-2xl mt-25">Type: NA</h2>
        <h4 className="text-xl mt-5 mx-5">
            • Minimum Amount: ₹ 1000<br/>
            • Maximum Amount: ₹ 3500<br/>
            • Tenure: 2 (days/months)<br/>
        </h4>
      </div>
      <div className="fixed bottom-0 w-full mt-5">
      <Footer/>

      </div>
    </div>
  );
}

export default MFServices;
