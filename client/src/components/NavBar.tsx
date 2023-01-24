import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Filter from "./Filter";
const NavBar = () => {
  return (
    <div className="relative w-auto px-2 flex flex-col sm:flex-row items-center sm:justify-evenly mt-4 sm:mt-8 sm:w-[500px]">
      <div className="flex w-64 bg-white items-center gap-1 border-2 rounded-xl px-2 py-1">
        <MagnifyingGlassIcon className="w-[16px] h-[16px]" />
        <input
          className="bg-transparent border-none checked:border-none focus-visible:outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="mt-2 ml-2 self-start">
        <Filter />
      </div>
    </div>
  );
};

export default NavBar;
