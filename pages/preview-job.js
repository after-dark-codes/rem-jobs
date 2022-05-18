import React from "react";
import { useRecoilState } from "recoil";
import { newJobState } from "../atoms/jobsAtom";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";
import JobItem from "../components/JobItem";
import JobDescription from "../components/JobDescription";

function PreviewJob() {
  const [newJob, setNewJob] = useRecoilState(newJobState);
  console.log(newJob);
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
      <JobItem
        category={newJob.category}
        companyUrl={newJob.companyUrl}
        employmentType={newJob.employmentType}
        jobTitle={newJob.jobTitle}
        remoteReqs={newJob.remoteReqs}
        salary={newJob.salary}
      />
      <JobDescription desc={newJob.jobDescription} />
    </>
  );
}

export default PreviewJob;
