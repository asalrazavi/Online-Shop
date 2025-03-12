import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import { FaRegUser } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex justify-between py-4 px-8 bg-secondary-0 border-b border-secondary-200 top-0 fixed w-full col-span-5 z-20">
      <div className={`flex items-center justify-start gap-x-8`}>
        <HeaderMenu />
      </div>
      <div className={`flex items-center justify-end gap-x-8`}>
        <Link to="dashboard">
          <FaRegUser className="w-5 h-5 text-primary-900" />
        </Link>
      </div>
    </div>
  );
}
