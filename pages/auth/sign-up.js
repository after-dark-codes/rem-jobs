import React, { useState } from "react";
import Editor from "../../components/Editor";
import axios from "axios";
import { useRouter } from "next/router";
import {
  EyeIcon,
  AtSymbolIcon,
  TagIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";

function SignUp() {
  const [description, setDescription] = useState("");
  const router = useRouter();

  const getContent = (data) => {
    setDescription(data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newCompany = await axios.post(`http://localhost:1337/api/companies`, {
      data: {
        companyName: e.target.companyName.value,
        companyTagLine: e.target.companyTagLine.value,
        companyDescription: description,
      },
    });
    console.log(newCompany);

    router.replace("/");
  };

  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

        <p className="mt-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
          nulla eaque error neque ipsa culpa autem, at itaque nostrum!
        </p>
      </div>

      <form
        action=""
        className="max-w-md mx-auto mt-8 mb-0 space-y-4"
        onSubmit={onSubmit}
      >
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter email"
            />

            <span className="absolute inset-y-0 inline-flex items-center right-4">
              <AtSymbolIcon className="w-5 h-5 text-gray-400" />
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type="password"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter password"
            />

            <span className="absolute inset-y-0 inline-flex items-center right-4">
              <EyeIcon className="w-5 h-5 text-gray-400" />
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="companyName" className="sr-only">
            Company name
          </label>

          <div className="relative">
            <input
              id="companyName"
              name="companyName"
              type="text"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter company name"
            />

            <span className="absolute inset-y-0 inline-flex items-center right-4">
              <TagIcon className="w-5 h-5 text-gray-400" />
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="companyTagLine" className="sr-only">
            Company tag line
          </label>

          <div className="relative">
            <input
              id="companyTagLine"
              name="companyTagLine"
              type="text"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Tagline"
            />

            <span className="absolute inset-y-0 inline-flex items-center right-4">
              <LightningBoltIcon className="w-5 h-5 text-gray-400" />
            </span>
          </div>
          <p className="text-sm text-gray-400 italic">
            Optional: This will be used in your company profile as short summary
            (max 10 words).
          </p>
        </div>

        <div>
          <label htmlFor="companyDescription" className="sr-only">
            Company description
          </label>

          <div className="relative">
            <Editor
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              getContent={getContent}
            />
          </div>
          <p className="text-sm text-gray-400 italic">
            Optional: This will be used in your company profile as full company
            description
          </p>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
