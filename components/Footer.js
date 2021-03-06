import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-300">
      <div className="grid max-w-screen-xl grid-cols-1 mx-auto lg:grid-cols-2">
        <div className="px-4 py-16 border-b border-gray-800 md:border-b-0 md:border-l lg:pl-12 lg:order-last">
          <div className="block lg:hidden">
            <span className="inline-block w-32 h-10 bg-gray-700 rounded-lg"></span>
          </div>

          <div className="mt-12 space-y-4 lg:mt-0">
            <span className="block w-10 h-1 bg-indigo-500 rounded"></span>

            <div>
              <h5 className="text-2xl font-medium text-white">
                Get updates on remote jobs!
              </h5>

              <p className="max-w-xs mt-1 text-xs text-gray-500">
                Get a daily update on remote jobs
              </p>
            </div>

            <form>
              <div className="relative max-w-lg">
                <label className="sr-only" htmlFor="email">
                  {" "}
                  Email{" "}
                </label>

                <input
                  className="w-full py-4 pl-3 pr-16 text-sm bg-gray-800 border-none rounded-lg"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />

                <button
                  className="absolute p-3 text-white -translate-y-1/2 bg-blue-600 rounded-md top-1/2 right-1.5"
                  type="button"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="px-4 py-16 lg:pr-12">
          <div className="hidden lg:block">
            <span className="inline-block w-32 h-10 bg-gray-700 rounded-lg"></span>
          </div>

          <div className="grid grid-cols-3 gap-8 lg:mt-12">
            <div>
              <p className="font-bold text-white">Helpful</p>

              <nav className="flex flex-col mt-2 space-y-1 text-xs text-gray-400">
                <a className="hover:opacity-75" href="">
                  {" "}
                  Contact{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Live Chat{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Resources{" "}
                </a>
              </nav>
            </div>

            <div>
              <p className="font-bold text-white">Solutions</p>

              <nav className="flex flex-col mt-2 space-y-1 text-xs text-gray-400">
                <a className="hover:opacity-75" href="">
                  {" "}
                  Instant Checkout{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Product Upsells{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Slideout Cart{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  User Dashboards{" "}
                </a>
              </nav>
            </div>

            <div>
              <p className="font-bold text-white">About</p>

              <nav className="flex flex-col mt-2 space-y-1 text-xs text-gray-400">
                <a className="hover:opacity-75" href="">
                  {" "}
                  About Us{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Meet the Team{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  History{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Careers{" "}
                </a>
              </nav>
            </div>
          </div>

          <div className="flex mt-12 space-x-6 text-xs text-white">
            <p> &copy; 2022 Company Name </p>
            <a className="underline hover:opacity-75" href="">
              {" "}
              Privacy Policy{" "}
            </a>
            <a className="underline hover:opacity-75" href="">
              {" "}
              Terms & Conditions{" "}
            </a>
            <a className="underline hover:opacity-75" href="">
              {" "}
              Cookies{" "}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
