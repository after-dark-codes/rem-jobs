function JobItem() {
  return (
    <article className="m-5 p-1 shadow-xl rounded-2xl border-2">
      <a
        href=""
        className="flex flex-col justify-end h-full p-6 sm:p-8 rounded-xl hover:bg-opacity-90"
      >
        <div className="mt-16">
          <p className="text-xs font-medium text-black">26/05/2021</p>
          <h5 className="mt-2 text-xl font-bold text-black">
            Custom Helper to Improve the Rails phone_to Helper
          </h5>
          <div className="flex items-center justify-between mt-6">
            <p className="text-lg font-medium text-black bg-clip-text">Rails</p>
            <ul className="flex space-x-1">
              <li className="inline-block rounded-full text-black text-xs font-medium px-3 py-1.5 bg-gray-500">
                Snippet
              </li>
              <li className="inline-block rounded-full text-black text-xs font-medium px-3 py-1.5 bg-gray-500">
                Info
              </li>
              <li className="inline-block rounded-full text-black text-xs font-medium px-3 py-1.5 bg-gray-500">
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
