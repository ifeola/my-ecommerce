import { useContext } from "react";
import ProductsContext from "../utils/ProductsContext";
import ProductList from "../components/ProductList";

const Beauty = () => {
  const { productsList } = useContext(ProductsContext);

  const products = productsList.filter(
    (product) => product.category === "beauty"
  );

  return <ProductList products={products} />;
};
export default Beauty;
