import Fragrance from "./pages/Fragrance";
import Furniture from "./pages/Furniture";
import Groceries from "./pages/Groceries";
import Beauty from "./pages/Beauty";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index path="/" element={<Products />} />
          <Route path="beauty" element={<Beauty />} />
          <Route path="fragrances" element={<Fragrance />} />
          <Route path="furniture" element={<Furniture />} />
          <Route path="groceries" element={<Groceries />} />
          <Route
            index
            path="products/:productId"
            element={<ProductDetails />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
