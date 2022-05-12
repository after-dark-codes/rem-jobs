import React from "react";
import Header from "../components/Header";
import NewJobForm from "../components/NewJobForm";
import CompanyForm from "../components/CompanyForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function PostJob() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.push("/api/auth/signin");
  }

  return (
    <>
      <Header />
      <NewJobForm />
      <CompanyForm />
    </>
  );
}

export default PostJob;
