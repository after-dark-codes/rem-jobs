import { signOut, signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { jobsState } from "../atoms/jobsAtom";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <header className="shadow-sm sticky">
      <div className="max-w-screen-xl p-4 mx-auto">
        <div className="flex items-center justify-between space-x-4 lg:space-x-10">
          <div
            className="flex lg:w-0 lg:flex-1 cursor-pointer"
            onClick={() => router.push("/")}
          >
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
            {session ? (
              <>
                <a
                  className="px-5 py-2 text-sm font-medium text-white bg-[#77BB3F] rounded-lg cursor-pointer"
                  onClick={() => router.push("/new-job")}
                >
                  Post Job
                </a>
                <img
                  onClick={signOut}
                  src={session?.user?.image}
                  alt="image"
                  className="cursor-pointer"
                />
              </>
            ) : (
              <a
                className="px-5 py-2 text-sm font-medium text-gray-500 rounded-lg"
                href=""
                onClick={signIn}
              >
                Sign in
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
