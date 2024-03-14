import { Link } from "react-router-dom";
import Light from "../../assets/img/svg/sun.svg?react";
import Dark from "../../assets/img/svg/moon.svg?react";
import Cart from "../../assets/img/svg/cart.svg?react";

const categories: { title: string; englishTitle: string }[] = [
  {
    title: "패션",
    englishTitle: "fashion",
  },
  {
    title: "액세서리",
    englishTitle: "accessory",
  },
  {
    title: "디지털",
    englishTitle: "digital",
  },
];

const Nav = (): JSX.Element => {
  return (
    <nav className="fixed inset-x-0 p-2 bg-white shadow-lg z-10">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl2 h-12">
        <div className="flex">
          <Link to="/" className="flex items-center text-lg font-bold text-gray-700 mx-2">
            React Shop
          </Link>
          <ul className="flex items-center ml-2">
            {categories.map(({ title, englishTitle }) => (
              <li key={title}>
                <Link to={`/${englishTitle}`} className="btn btn-ghost btn-sm rounded-btn text-gray-700">
                  {title}
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
            <Cart className="h-6 w-6 stroke-gray-700" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
