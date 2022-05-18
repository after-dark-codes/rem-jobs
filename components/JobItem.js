import { CurrencyDollarIcon } from "@heroicons/react/outline";

function JobItem({
  category,
  companyUrl,
  createdAt,
  employmentType,
  jobTitle,
  remoteReqs,
  salary,
}) {
  return (
    <article className="m-5 p-1 shadow-xl rounded-2xl border-2">
      <a
        href=""
        className="flex flex-col justify-end h-full p-6 sm:p-8 rounded-xl hover:bg-opacity-90"
      >
        <div className="mt-16">
          <p className="text-xs font-medium text-black">{category}</p>

          <h5 className="mt-2 text-xl font-bold text-black">{jobTitle}</h5>
          <div className="flex items-center justify-between mt-6">
            <p className="text-lg font-medium text-black bg-clip-text">
              {employmentType}
            </p>
            <ul className="flex space-x-1">
              {!!remoteReqs &&
                remoteReqs.split(",").map((remReq) => (
                  <li
                    key={remReq}
                    className="inline-block rounded-full text-black text-xs font-medium px-3 py-1.5 bg-gray-500"
                  >
                    {remReq}
                  </li>
                ))}
            </ul>
            <div>
              <strong className="inline-flex items-center border border-green-500 text-green-500 border-current uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide">
                {salary}
                <div className="p-1 bg-red-100 hover:opacity-75 transition-opacity rounded-full ml-2.5 -mr-2.5 focus:outline-none focus:ring">
                  <span className="sr-only"> Salary </span>

                  <CurrencyDollarIcon className="w-5 h-5 text-gray-400" />
                </div>
              </strong>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
}

export default JobItem;
