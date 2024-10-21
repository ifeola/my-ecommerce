import { createContext } from "react";

const ProductsContext = createContext();
// [
//   {
//     id,
//     title,
//     description,
//     category,
//     price,
//     discountPercentage,
//     rating,
//     stock,
//     tags,
//     brand,
//     sku,
//     weight,
//     dimensions: {
//       width,
//       height,
//       depth,
//     },
//     warrantyInformation,
//     shippingInformation,
//     availabilityStatus,
//     reviews: [
//       {
//         rating,
//         comment,
//         date,
//         reviewerName,
//         reviewerEmail,
//       },
//       {
//         rating,
//         comment,
//         date,
//         reviewerName,
//         reviewerEmail,
//       },
//       {
//         rating,
//         comment,
//         date,
//         reviewerName,
//         reviewerEmail,
//       },
//     ],
//     returnPolicy,
//     minimumOrderQuantity,
//     meta: {
//       createdAt,
//       updatedAt,
//       barcode,
//       qrCode,
//     },
//     images,
//     thumbnail,
//   },
// ]

export default ProductsContext;
