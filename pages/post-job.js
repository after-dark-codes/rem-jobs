import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import NewJobForm from "../components/NewJobForm";
import Breadcrumb from "../components/Breadcrumb";

function PostJob() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.push("/api/auth/signin");
    return <p>Loading...</p>;
  }

  return (
    <>
      <header className="shadow-sm sticky">
        <div className="max-w-screen-xl p-4 mx-auto">
          <div className="flex items-center justify-between space-x-4 lg:space-x-10">
            <div
              className="flex lg:w-0 lg:flex-1 cursor-pointer"
              onClick={() => router.push("/")}
            >
              <Image
                alt="From Your Couch Careers logo"
                src="/logo.jpeg"
                width="50px"
                height="50px"
              />
            </div>

            <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
              <Breadcrumb />
            </div>
          </div>
        </div>
      </header>
      <NewJobForm />
    </>
  );
}

export default PostJob;
