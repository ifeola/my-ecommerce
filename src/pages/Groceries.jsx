import { useContext } from "react";
import ProductList from "../components/ProductList";
import ProductsContext from "../utils/ProductsContext";

const Groceries = () => {
  const { productsList } = useContext(ProductsContext);

  const products = productsList.filter(
    (product) => product.category === "groceries"
  );

  return <ProductList products={products} />;
};
export default Groceries;
