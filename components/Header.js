import Image from "next/image";

function Header() {
  return (
    <header className="shadow-sm sticky">
      <div className="max-w-screen-xl p-4 mx-auto">
        <div className="flex items-center justify-between space-x-4 lg:space-x-10">
          <div className="flex lg:w-0 lg:flex-1">
            {/* <span className="w-20 h-10 bg-gray-200 rounded-lg"></span> */}
            <Image
              alt="From Your Couch Careers logo"
              src="/logo.jpeg"
              width="50px"
              height="50px"
            />
          </div>

          <nav className="hidden space-x-8 text-sm font-medium md:flex">
            <a className="text-gray-500" href="">
              Job Seekers
            </a>
            <a className="text-gray-500" href="">
              Employers
            </a>
          </nav>

          <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
            <a
              className="px-5 py-2 text-sm font-medium text-white bg-[#77BB3F] rounded-lg"
              href=""
            >
              Post Job
            </a>

            <a
              className="px-5 py-2 text-sm font-medium text-gray-500 rounded-lg"
              href=""
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
