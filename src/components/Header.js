import { GlobeAltIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="mx-auto lg:max-w-7xl my-6">
      <div className="grid grid-cols-3">
        {/* logo */}
        <div className="col-span-1 p-6 rounded-lg text-center">
          <h1 className="text-2xl font-bold">
            <span className="text-yellow-400">Obi's</span>NEWS
          </h1>
        </div>

        {/* right box */}
        <div className="col-span-2 rounded bg-black flex items-center space-x-6 flex-1 justify-around">
          <div className="text-center">
            <p className="text-white">Welcome to</p>
            <p className="text-yellow-400">Obi's News App!</p>
          </div>
          <button className="inline-flex items-center space-x-1 bg-yellow-400 text-white font-bold py-2 px-4 rounded transition-all ease-in-out hover:bg-white hover:text-yellow-400">
            <GlobeAltIcon className="w-4 h-4" />
            <span>justobii.com</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
