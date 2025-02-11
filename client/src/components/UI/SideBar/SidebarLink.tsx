import { useNavigate, useLocation } from "react-router-dom";

type SidebarLinkProps = {
  name: string;
  icon: string;
  parent?: string; // Assuming parent is optional
  to: string;
  isHidden: boolean;
};

export default function SidebarLink({
  name,
  icon,
  isHidden,
  to,
}: SidebarLinkProps) {
  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const targetPath = e.currentTarget.dataset.to;
    if (targetPath === "/logout") {
      localStorage.removeItem("token");
      navigate("/");
    } else if (typeof targetPath === "string") {
      navigate(targetPath);
    }
  };

  return (
    <li
      key={name}
      onClick={handleClick}
      data-to={to}
      className={` rounded-md `}
    >
      <a>
        <img src={icon} className="h-5 w-5" alt="" />
        {!isHidden && name}
      </a>
    </li>
  );
}
