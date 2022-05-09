import React from "react";
import Header from "../components/Header";
import NewJobForm from "../components/NewJobForm";
import CompanyForm from "../components/CompanyForm";

function PostJob() {
  return (
    <>
      <Header />
      <NewJobForm />
      <CompanyForm />
    </>
  );
}

export default PostJob;
