import { Home, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full mx-auto h-16 flex items-center justify-center fixed top-0 left-0 border border-b-neutral-200 bg-neutral-50/5 backdrop-blur-md">
      <div className="max-w-5xl w-full h-full flex items-center justify-between">
        <Link to="/">Cartty.</Link>
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link to="/">All</Link>
            </li>
            <li>
              <Link to="/wears">Wears</Link>
            </li>
            <li>
              <Link to="/gadgets">Gadgets</Link>
            </li>
            <li>
              <Link to="/accessories">Accessories</Link>
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
