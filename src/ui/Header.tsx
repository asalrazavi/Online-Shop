import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { RootState } from "../services/store";
import { useEffect, useState } from "react";
import HeaderSkeleton from "../skeleton/HeaderSkeleton";

export default function Header() {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <HeaderSkeleton />;

  return (
    <div className="flex justify-between py-4 px-8 bg-secondary-0 border-b border-secondary-200 top-0 fixed w-full col-span-5 z-20">
      <div className={`flex items-center justify-start gap-x-8`}>
        <HeaderMenu />
      </div>
      <div className={`flex items-center justify-end gap-x-8`}>
        <Link to="/cart" className="relative">
          <span className="absolute -top-2 -right-2 text-sm font-medium bg-primary-900 px-2 py-0.5 rounded-full text-secondary-0">
            {cartItems.length}
          </span>
          <CiShoppingCart className="size-8 text-primary-900" />
        </Link>
      </div>
    </div>
  );
}
