import { useContext } from "react";
import ProductList from "../components/ProductList";
import ProductsContext from "../utils/ProductsContext";

const Furniture = () => {
  const { productsList } = useContext(ProductsContext);

  const products = productsList.filter(
    (product) => product.category === "furniture"
  );

  return <ProductList products={products} />;
};
export default Furniture;
