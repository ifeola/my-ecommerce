import { useContext } from "react";
import ProductsContext from "../utils/ProductsContext";
import ProductList from "./ProductList";

const Products = () => {
  const {
    productsToDisplay,
    isLoading,
    setCurrentPage,
    currentPage,
    pages,
    productsList,
  } = useContext(ProductsContext);

  return (
    <ProductList
      products={productsToDisplay}
      isLoading={isLoading}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      pages={pages}
      productsList={productsList}
    />
  );
};
export default Products;
