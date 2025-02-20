import DropDown from "../DropDown/DropDown";

export default function SearchBar() {
  return (
    <div className="navbar bg-base-100 rounded-lg">
      <div className="flex-1">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-52 md:w-auto"
          />
        </div>
      </div>
      <div className="flex-none gap-2">
        <DropDown title="Filter" />
        <DropDown title="Sort" />
      </div>
    </div>
  );
}
