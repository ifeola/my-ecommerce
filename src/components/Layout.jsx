import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useEffect } from "react";

const Layout = () => {
  // useEffect(() => {
  //   fetch("https://dummyjson.com/products/categories")
  //     .then((res) => res.json())
  //     .then(console.log);
  // });

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
