import { Home, Search, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full mx-auto h-16 flex items-center justify-center fixed top-0 left-0 border border-b-neutral-200 bg-neutral-50/5 backdrop-blur-md z-20">
      <div className="max-w-5xl w-full h-full flex items-center justify-between">
        <Link to="/">Cartty.</Link>
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-purple-600" : "text-black"
                }>
                All
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/beauty"
                className={({ isActive }) =>
                  isActive ? "text-purple-600" : "text-black"
                }>
                Beauty
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/fragrances"
                className={({ isActive }) =>
                  isActive ? "text-purple-600" : "text-black"
                }>
                Fragrance
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/furniture"
                className={({ isActive }) =>
                  isActive ? "text-purple-600" : "text-black"
                }>
                Furniture
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/groceries"
                className={({ isActive }) =>
                  isActive ? "text-purple-600" : "text-black"
                }>
                Groceries
              </NavLink>
            </li>
          </ul>
        </nav>
        <ul className="flex items-center gap-4">
          <li>
            <Link to="/accessories">
              <Search />
            </Link>
          </li>
          <li>
            <Link to="/accessories">
              <Home />
            </Link>
          </li>
          <li>
            <Link to="/accessories">
              <User />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
