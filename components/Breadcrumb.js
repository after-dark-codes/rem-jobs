import Link from "next/link";
import React from "react";

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        role="list"
        className="flex items-center space-x-1 text-sm text-gray-500"
      >
        <li>
          <Link href="#">
            <a className="block transition-colors hover:text-gray-700" href="#">
              {" "}
              Create Job Listing{" "}
            </a>
          </Link>
        </li>

        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </li>

        <li>
          <a
            className="block transition-colors hover:text-gray-700"
            href="/collections/shirts"
          >
            {" "}
            Preview{" "}
          </a>
        </li>

        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </li>

        <li>
          <a
            className="block transition-colors hover:text-gray-700"
            href="/products/plain-tee"
          >
            {" "}
            Confirm & Pay{" "}
          </a>
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
