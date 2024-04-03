import { Link } from "react-router-dom";
import Light from "../../assets/img/svg/sun.svg?react";
import Dark from "../../assets/img/svg/moon.svg?react";
import Cart from "../../assets/img/svg/cart.svg?react";
import Hamburger from "../../assets/img/svg/hamburger.svg?react";
import { CATEGORIES, MENUS } from "../../constants/category";
import { useRecoilState } from "recoil";
import { ICartState, cartState } from "../../store/cart";

const Nav = (): JSX.Element => {
  const [cart] = useRecoilState<ICartState>(cartState);
  const cartItemCount = Object.keys(cart).length;

  return (
    <div>
      <nav className="fixed inset-x-0 p-2 bg-white shadow-lg z-10">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl2 h-12">
          <div className="flex">
            <label htmlFor="side-menu" className="flex-none lg:hidden btn btn-square btn-ghost w-10 sm:w-auto">
              <Hamburger />
            </label>
            <Link to="/" className="flex items-center text-lg font-bold text-gray-700 mx-2">
              React Shop
            </Link>
            <ul className="flex-none hidden md:flex items-center ml-2">
              {CATEGORIES.map((category) => (
                <li key={category}>
                  <Link to={`/${category.toLowerCase()}`} className="btn btn-ghost btn-sm rounded-btn text-gray-700">
                    {MENUS[category]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center px-2">
            <label className="swap swap-rotate mr-4">
              <input type="checkbox" className="theme-controller" value="synthwave" />
              <Light className="swap-off fill-current w-7 h-7" />
              <Dark className="swap-on fill-current w-7 h-7" />
            </label>
            <input type="text" placeholder="검색" className="input px-4 w-full bg-gray-300 focus:outline-0" />
            <Link to="/cart" className="btn btn-ghost p-0 ml-1 w-12">
              <span className="relative">
                <Cart className="h-6 w-6 stroke-gray-700" />
                <span className="inline-flex items-center justify-center absolute top-0 right-0 px-2 py-1 rounded-full bg-red-500 text-xs font-bold leading-none text-gray-200 transform translate-x-1/2 -translate-y-1/2">
                  {cartItemCount}
                </span>
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
