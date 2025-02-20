import { getIcon } from "@/config/icons";
import { IconType } from "@/config/icons";

type DropDownProps = {
  title: keyof IconType;
};
export default function DropDown({ title }: DropDownProps) {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-5 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={getIcon(title)} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        {["Popularity", "SOmething"].map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
