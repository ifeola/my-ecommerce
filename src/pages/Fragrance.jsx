import { useContext } from "react";
import ProductList from "../components/ProductList";
import ProductsContext from "../utils/ProductsContext";

const Fragrance = () => {
  const { productsList } = useContext(ProductsContext);

  const products = productsList.filter(
    (product) => product.category === "fragrances"
  );

  return <ProductList products={products} />;
};
export default Fragrance;
