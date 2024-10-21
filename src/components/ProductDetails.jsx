import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Heart, ShoppingBasket, Star, StarIcon } from "lucide-react";
import Counter from "./Counter";
import useFormatDate from "../utils/useFormatDate";
import StarRating from "./StarRating";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    async function getProduct() {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
      setIsLoading(false);
    }
    getProduct();
  }, [productId]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="max-w-5xl mx-auto mt-16 py-10">
          <div key={product.id} className="grid grid-cols-2 items-start gap-12">
            <div className="border border-neutral-200 max-h-[32rem] h-full overflow-hidden bg-neutral-100">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div>
                <h3 className="text-3xl font-medium">{product.title}</h3>
                <div className="flex items-center gap-4 text-sm text-neutral-500">
                  <span className="border border-neutral-200 px-2 py-1">
                    Brand: {product.brand}
                  </span>
                  <span className="border border-neutral-200 px-2 py-1">
                    Category: {product.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center my-2 divide-x-2 gap-2">
                <div className="flex items-center gap-1">
                  <Star className="fill-yellow-500 stroke-transparent w-4" />
                  <span className="text-neutral-500">
                    ({product.rating} verified ratings)
                  </span>
                </div>
                <span className="text-neutral-500 pl-2">
                  Stock ({product.stock})
                </span>
              </div>
              <div className="flex items-baseline gap-4">
                <h2 className="text-3xl font-bold">${product.price}</h2>
                <span className="text-neutral-600">
                  -{product.discountPercentage}%
                </span>
              </div>
              <p className="my-3">{product.description}</p>
              <div className="py-3 border-y border-y-neutral-200">
                <h5 className="text-sm font-medium">
                  Minimum Quantity: {product.minimumOrderQuantity}
                </h5>
                <div className="grid grid-cols-[auto_1fr_auto] gap-3">
                  <Counter
                    minimumOrderQuantity={product.minimumOrderQuantity}
                  />
                  <button className="flex text-center bg-purple-600 hover:bg-purple-700 text-white items-center justify-center text-nowrap">
                    Add To Cart
                    <ShoppingBasket className="w-5 ml-2" />
                  </button>
                  <button className="grid group place-content-center border border-neutral-600  px-2 hover:bg-neutral-700">
                    <Heart className="group-hover:stroke-white stroke-neutral-600 w-5" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-4 border border-neutral-300 divide-x-2 text-sm">
                <div className="p-2">
                  <h6 className="font-medium">Warranty Info:</h6>
                  <span>{product.warrantyInformation}</span>
                </div>
                <div className="p-2">
                  <h6 className="font-medium">Shipped In:</h6>
                  <span>{product.shippingInformation}</span>
                </div>
                <div className="p-2">
                  <h6 className="font-medium">Return Policy:</h6>
                  <span>{product.returnPolicy}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="p-4 font-medium text-xl border border-neutral-200 mb-2">
              Verified Customer Feedback
            </h1>
            <ul className="grid grid-cols-3 gap-3">
              {product.reviews.map((review) => {
                return (
                  <li className="bg-neutral-50 p-4 border border-neutral-200">
                    <span>
                      <StarRating starCount={review.rating} />
                    </span>
                    <p className="text-base font-normal">{review.comment}</p>
                    <h4 className="text-sm text-neutral-700 my-1">
                      {review.reviewerEmail}
                    </h4>
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm text-neutral-500">
                        {review.reviewerName}
                      </h4>
                      <span className="text-sm text-neutral-500">
                        {useFormatDate(review.date)}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};
export default ProductDetails;
