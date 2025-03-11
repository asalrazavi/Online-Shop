import { Link } from "react-router-dom";

function HeaderMenu() {
  return (
    <ul className="flex gap-x-4 items-center font-bold text-lg">
      <li className="flex">
        <Link to="/">
          <p>خانه</p>
        </Link>
      </li>
      <li className="flex">
        <Link to="products">
          <p>محصولات</p>
        </Link>
      </li>
    </ul>
  );
}
export default HeaderMenu;
