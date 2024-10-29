import Product from "./Product";
import { NavLink, Link } from "react-router-dom";
import Loading from "./Loading";

const ProductList = ({
  products,
  isLoading,
  setCurrentPage,
  currentPage,
  pages,
}) => {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="max-w-5xl mx-auto mt-16 py-10 px-4 lg:px-0">
          <div className="grid grid-cols-5 gap-4 mb-4">
            <NavLink
              to="."
              className={`${({ isActive }) => {
                return isActive ? "text-purple-600" : "text-black";
              }}`}>
              All
            </NavLink>
            <NavLink
              to="?category=beauty"
              className={`border border-neutral-300 h-10 grid place-content-center hover:bg-neutral-300 ${({
                isActive,
              }) => (isActive ? "bg-neutral-300" : "bg-transparent")}`}>
              Beauty
            </NavLink>
            <NavLink
              to="?category=fragrances"
              className={`border border-neutral-300 h-10 grid place-content-center hover:bg-neutral-300 ${({
                isActive,
              }) => (isActive ? "bg-neutral-300" : "bg-transparent")}`}>
              Fragrances
            </NavLink>
            <NavLink
              to="?category=furniture"
              className={`border border-neutral-300 h-10 grid place-content-center hover:bg-neutral-300 ${({
                isActive,
              }) => (isActive ? "bg-neutral-300" : "bg-transparent")}`}>
              Furniture
            </NavLink>
            <NavLink
              to="?category=groceries"
              className={`border border-neutral-300 h-10 grid place-content-center hover:bg-neutral-300 ${({
                isActive,
              }) => (isActive ? "bg-neutral-300" : "bg-transparent")}`}>
              Groceries
            </NavLink>
          </div>

          <ul className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              return (
                <Link
                  to={`products/${product.id}`}
                  key={product.id}
                  className="group">
                  <Product
                    key={product.id}
                    name={product.title}
                    image={product.images[0]}
                    price={product.price}
                    discountPercentage={product.discountPercentage}
                    rating={product.rating}
                  />
                </Link>
              );
            })}
          </ul>
          <div className="w-fit mx-auto mt-6 flex items-center gap-2">
            {Number(pages.length) > 1 &&
              pages.map((page) => {
                return (
                  <button
                    className={`w-10 h-10 border border-neutral-200 hover:bg-purple-600 hover:border-purple-600 grid place-content-center ${
                      currentPage === page
                        ? "border-purple-600 bg-purple-600"
                        : ""
                    } `}
                    onClick={() => setCurrentPage(page)}>
                    {page}
                  </button>
                );
              })}
          </div>
        </section>
      )}
    </>
  );
};
export default ProductList;
