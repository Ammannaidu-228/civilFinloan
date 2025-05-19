import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <div className="bg-white">
        <Navbar/>
          <div className="relative isolate overflow-hidden bg-gray-100 px-6 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-25 py-60 lg:text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-black sm:text-4xl">
                About Us
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-gray-900">
                Civil-Finloan is a finance management company which is providing
                the extensive array of services by providing loans to citizens.
                Money transfer, wealth management and also leading on providing
                micro loans to agriculture and small business in the rural
                regions.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md mb-5 bg-yellow-500  px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Explore Home
                </a>
              </div>
            </div>
          </div>
          <div className="lg:fixed bottom-0 w-full">
          <Footer/>

          </div>
      </div>
    </>
  );
}
