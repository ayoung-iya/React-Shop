import { Link } from "react-router-dom";
import { MENUS, CATEGORIES } from "../../constants/category";

const Drawer = (): JSX.Element => {
  return (
    <div className="drawer-side">
      <label htmlFor="side-menu" className="drawer-overlay"></label>
      <ul className="menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100">
        {CATEGORIES.map((category) => (
          <li key={category}>
            <Link to={`/${category.toLocaleLowerCase()}`}>{MENUS[category]}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drawer;
