import React, { useState } from "react";
import axios from "axios";
import Editor from "./Editor";
import {
  employmentType,
  jobCategories,
  remoteLocations,
} from "../utils/constants";
import RemoteLocation from "./RemoteLocation";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { newJobState } from "../atoms/jobsAtom";

function NewJobForm() {
  const router = useRouter();
  const [description, setDescription] = useState("");
  const [otherRemoteReqs, setOtherRemoteReqs] = useState(false);
  const [jobCategory, setJobCategory] = useState("Software Development");
  const [empType, setEmpType] = useState("Full-Time");
  const [remoteReqs, setRemoteReqs] = useState([]);

  const [newJob, setNewJob] = useRecoilState(newJobState);

  const getContent = (data) => {
    setDescription(data);
  };

  const onRemoteReqChange = (e) => {
    setRemoteReqs([]);
    if (e.target.id === "remote-other") {
      setOtherRemoteReqs(true);
    } else if (e.target.id === "remote-worldwide") {
      setRemoteReqs(["Worldwide"]);
      setOtherRemoteReqs(false);
    } else {
      setRemoteReqs(["USA"]);
      setOtherRemoteReqs(false);
    }
  };

  const wasChecked = (label) => {
    setRemoteReqs((reqs) => [...reqs, label]);
  };

  const categoryChangeHandler = (e) => setJobCategory(e.target.value);
  const empTypeChangeHandler = (e) => setEmpType(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    // make feature protected
    // const newJob = await axios.post(`http://localhost:1337/api/jobs`, {
    //   data: {
    //     companyUrl: e.target.companyUrl.value,
    //     jobTitle: e.target.jobTitle.value,
    //     category: jobCategory,
    //     employmentType: empType,
    //     remoteReqs: remoteReqs.join(","),
    //     salary: e.target.salary.value,
    //     jobDescription: description,
    //   },
    // });
    setNewJob({
      companyUrl: e.target.companyUrl.value,
      jobTitle: e.target.jobTitle.value,
      category: jobCategory,
      employmentType: empType,
      remoteReqs: remoteReqs.join(","),
      salary: e.target.salary.value,
      jobDescription: description,
    });
    console.log(newJob);
    router.replace("/preview-job");
  };

  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-1 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <h2>Tell us about your job</h2>
            <form action="#" onSubmit={onSubmit}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="companyUrl"
                        className="block text-sm font-medium text-gray-700"
                      >
                        How to apply
                      </label>
                      <p className="italic text-gray-500 text-sm">
                        Please provide a URL where we will redirect applicants
                        so they can apply to you directly.
                      </p>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          http://
                        </span>
                        <input
                          type="text"
                          name="companyUrl"
                          id="companyUrl"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="www.example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="jobTitle"
                      className="block text-sm font-medium text-gray-700"
                    >
                      JobTitle
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      id="jobTitle"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={jobCategory}
                      onChange={categoryChangeHandler}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      {jobCategories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="employmentType"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Employment Type
                    </label>
                    <select
                      id="employmentType"
                      name="employmentType"
                      value={empType}
                      onChange={empTypeChangeHandler}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      {employmentType.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <fieldset>
                    <div>
                      <legend className="text-base font-medium text-gray-900">
                        Remote Location Requirements?
                      </legend>
                      <p className="italic text-sm text-gray-500">
                        Other unfolds more granular options
                      </p>
                    </div>
                    <div className="grid grid-cols-3 my-3">
                      <div className="flex items-center">
                        <input
                          id="remote-worldwide"
                          name="remote-requirements"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          onChange={onRemoteReqChange}
                        />
                        <label
                          htmlFor="remote-worldwide"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Worldwide
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="remote-usa"
                          name="remote-requirements"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          onChange={onRemoteReqChange}
                        />
                        <label
                          htmlFor="remote-usa"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          USA
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="remote-other"
                          name="remote-requirements"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          onChange={onRemoteReqChange}
                        />
                        <label
                          htmlFor="remote-other"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Other
                        </label>
                      </div>
                    </div>
                    {!!otherRemoteReqs && (
                      <div>
                        <div className="shadow overflow-hidden sm:rounded-md">
                          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <fieldset>
                              <div className="grid sm:grid-cols-1 md:grid-cols-3">
                                {remoteLocations.map(([name, label]) => (
                                  <RemoteLocation
                                    key={name}
                                    name={name}
                                    label={label}
                                    wasChecked={wasChecked}
                                  />
                                ))}
                              </div>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                    )}
                  </fieldset>

                  <div>
                    <label
                      htmlFor="salary"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Salary
                    </label>
                    <input
                      type="text"
                      name="salary"
                      id="salary"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <p className="italic text-sm text-gray-500">
                      <span className="font-black">Highly Recommended:</span>{" "}
                      providing salary will give your job more visibility. It is
                      mandatory in some US states and other countries. It is
                      also needed for Google to list your job. Best format is
                      $USD per year, such as: &quot;$50k - $60k&quot;.
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="job-description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Job Descrition
                    </label>
                    <p className="italic text-sm text-gray-500">
                      Don&apos;t worry if that&apos;s not 100% perfect, you can{" "}
                      <span className="font-black">
                        always edit after posting{" "}
                      </span>
                      your job!{" "}
                    </p>
                    <p className="italic text-sm text-gray-500">
                      If your formatted content looks slightly off, don&apos;t
                      worry! A FYCC team member will manually check it and fix
                      it before publishing.
                    </p>
                    <Editor getContent={getContent} />
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewJobForm;
