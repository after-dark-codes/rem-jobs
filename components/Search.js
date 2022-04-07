import { SearchIcon } from "@heroicons/react/outline";
function Search() {
  return (
    <div className="p-10">
      <h1 className="flex justify-center items-center text-3xl p-5">
        The #1 Remote Work Community!
      </h1>
      <h3 className="flex justify-center items-center text-sm p-5">
        Want to work from your couch?
      </h3>
      <div className="relative mt-1 p-3 rounded-md flex">
        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-500" />
        </div>
        <input
          className="h-20 bg-gray-50 block w-1/2 pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-tl-md rounded-bl-md object-fill border-r-black"
          type="text"
          placeholder="Search Remote Jobs..."
        />
        <select className="h-20 absolute right-0 bg-gray-50 block w-1/2 pl-10 border-gray-300 focus:ring-black focus:border-black rounded-tr-md rounded-br-md object-fill border-l-black">
          <option value="1">1</option>
          <option value="1">1</option>
          <option value="1">1</option>
        </select>
      </div>
    </div>
  );
}

export default Search;
