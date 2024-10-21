import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProductsContext from "./utils/ProductsContext";
import Products from "./components/Products";
import useFetch from "./hooks/useFetch";
import ProductDetails from "./components/ProductDetails";
import Loading from "./components/Loading";

function App() {
  const { products, isLoading, error } = useFetch(
    "https://dummyjson.com/products"
  );

  if (isLoading) return <Loading />;
  if (error) return <h1>Error: {error}</h1>;
  const productList = products.products;

  return (
    <ProductsContext.Provider value={{ productList, isLoading }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Products />} />
            <Route
              index
              path="/products/:productId"
              element={<ProductDetails />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductsContext.Provider>
  );
}

export default App;
