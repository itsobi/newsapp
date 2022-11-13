import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function TopicsNavbar() {
  return (
    <div className="py-6">
      {/* Nav Links */}
      <div className="flex justify-center space-x-16 text-gray-400">
        <p>Home</p>
        <p>Sports</p>
        <p>Business</p>
        <p>Politics</p>
      </div>
      {/* Search Bar */}
      {/* <form className="flex items-center border rounded-full py-2 px-4">
          <MagnifyingGlassIcon className="w-4 h-4 mr-1" />
          <input type="text" className="outline-none" placeholder="Search" />
          <button hidden type="submit"></button>
        </form> */}
      <div className="mx-auto my-4 border lg:max-w-7xl" />
    </div>
  );
}

export default TopicsNavbar;
