import React, { useState } from "react";
import Editor from "./Editor";

function NewJobForm() {
  const [description, setDescription] = useState("");
  const [otherRemoteReqs, setOtherRemoteReqs] = useState(false);

  const getContent = (data) => {
    setDescription(data);
  };

  const onRemoteReqChange = (e) => {
    if (e.target.id === "remote-other") {
      setOtherRemoteReqs(true);
    } else {
      setOtherRemoteReqs(false);
    }
  };
  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-1 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Profile
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="company-website"
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
                          name="company-website"
                          id="company-website"
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
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>Software Development</option>
                      <option>QA</option>
                      <option>DevOps</option>
                      <option>Design</option>
                      <option>Sales</option>
                      <option>Marketing</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="employment-type"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Employment Type
                    </label>
                    <select
                      id="employment-type"
                      name="employment-type"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>Full-Time</option>
                      <option>Part-Time</option>
                      <option>Contract</option>
                      <option>Freelance</option>
                      <option>Internship</option>
                      <option>Other</option>
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
                    <div className="mt-4 space-y-4">
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

                      {!!otherRemoteReqs && (
                        <>
                          <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                              <fieldset>
                                <div className="mt-4 space-y-4">
                                  <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="comments"
                                        name="comments"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="comments"
                                        className="font-medium text-gray-700"
                                      >
                                        Comments
                                      </label>
                                      <p className="text-gray-500">
                                        Get notified when someones posts a
                                        comment on a posting.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="candidates"
                                        name="candidates"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="candidates"
                                        className="font-medium text-gray-700"
                                      >
                                        Candidates
                                      </label>
                                      <p className="text-gray-500">
                                        Get notified when a candidate applies
                                        for a job.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                      <input
                                        id="offers"
                                        name="offers"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                      />
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label
                                        htmlFor="offers"
                                        className="font-medium text-gray-700"
                                      >
                                        Offers
                                      </label>
                                      <p className="text-gray-500">
                                        Get notified when a candidate accepts or
                                        rejects an offer.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </fieldset>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
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
