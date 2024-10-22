import Layout from "./components/Layout";
import ProductsContext from "./utils/ProductsContext";
import useFetch from "./hooks/useFetch";
import Loading from "./components/Loading";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("category");

  const [productsPerPage, setProductsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const { products, isLoading, error } = useFetch(
    "https://dummyjson.com/products"
  );

  if (isLoading) return <Loading />;
  if (error) return <h1>Error: {error}</h1>;
  let productsList = products.products;

  const lastPageIndex = productsPerPage * currentPage;
  const firstPageIndex = lastPageIndex - productsPerPage;

  let productList = filter
    ? productsList.filter((product) => product.category === filter)
    : productsList;
  let productsToDisplay = productList.slice(firstPageIndex, lastPageIndex);

  const pages = [];
  for (let i = 1; i <= Math.ceil(productList.length / productsPerPage); i++) {
    pages.push(i);
  }

  return (
    <ProductsContext.Provider
      value={{
        productsToDisplay,
        isLoading,
        setCurrentPage,
        pages,
        currentPage,
        productsList,
      }}>
      <Layout />
    </ProductsContext.Provider>
  );
}

export default App;
