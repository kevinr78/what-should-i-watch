import { useNavigate } from "react-router-dom";

type SidebarLinkProps = {
  name: string;
  icon: string;
  parent?: string; // Assuming parent is optional
  to: string;
  isHidden?: boolean;
};

export default function SidebarLink({
  name,
  icon,
  isHidden,
  to,
}: SidebarLinkProps) {
  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const targetPath = e.currentTarget.dataset.to;
    if (targetPath === "/logout") {
      localStorage.removeItem("token");
      navigate("/");
    } else if (typeof targetPath === "string") {
      navigate(targetPath);
    }
  };

  return (
    <p
      key={name}
      onClick={handleClick}
      data-to={to}
      className={` rounded-md p-2 hover:bg-lightPurple`}
    >
      <a className="flex gap-2">
        <img src={icon} className="h-5 w-5" alt="" />
        <span>{!isHidden && name}</span>
      </a>
    </p>
  );
}
