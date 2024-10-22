import { useState } from "react";

const usePagination = ({productsList}) => {
  const [productsPerPage, setProductsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  const lastPageIndex = productsPerPage * currentPage;
  const firstPageIndex = lastPageIndex - productsPerPage;

  let productsToDisplay = productsList.slice(firstPageIndex, lastPageIndex);

  const pages = [];
  for (let i = 1; i <= Math.ceil(productsList.length / productsPerPage); i++) {
    pages.push(i);
  }

  return {
    productsToDisplay,
    setCurrentPage,
    pages,
    currentPage,
  };
};

export default usePagination;
