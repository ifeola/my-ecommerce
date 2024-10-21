import { useContext, useState } from "react";
import ProductsContext from "../utils/ProductsContext";
import Product from "./Product";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Products = () => {
  const { productList, isLoading } = useContext(ProductsContext);
  const [productsPerPage, setProductsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  const lastPageIndex = productsPerPage * currentPage;
  const firstPageIndex = lastPageIndex - productsPerPage;

  const products = productList.slice(firstPageIndex, lastPageIndex);

  const pages = [];
  for (let i = 1; i <= Math.ceil(productList.length / productsPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="max-w-5xl mx-auto mt-16 py-10">
          <ul className="grid grid-cols-3 items-center gap-6">
            {products.map((product) => {
              return (
                <Link to={`/products/${product.id}`} key={product.id}>
                  <Product
                    name={product.title}
                    image={product.images[0]}
                    price={product.price}
                  />
                </Link>
              );
            })}
          </ul>
          <div className="w-fit mx-auto mt-6 flex items-center gap-2">
            {pages.map((page) => {
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
export default Products;
