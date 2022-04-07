function JobItem() {
  return (
    <article className="p-1 shadow-xl rounded-2xl bg-gradient-to-r from-red-400 to-red-600">
      <a
        href=""
        className="flex flex-col justify-end h-full p-6 bg-gray-900 sm:p-8 rounded-xl hover:bg-opacity-90"
      >
        <div className="mt-16">
          <p className="text-xs font-medium text-gray-500">26/05/2021</p>
          <h5 className="mt-2 text-xl font-bold text-white">
            Custom Helper to Improve the Rails phone_to Helper
          </h5>
          <div className="flex items-center justify-between mt-6">
            <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              Rails
            </p>
            <ul className="flex space-x-1">
              <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                Snippet
              </li>
              <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                Info
              </li>
              <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                Tip
              </li>
            </ul>
          </div>
        </div>
      </a>
    </article>
  );
}

export default JobItem;
