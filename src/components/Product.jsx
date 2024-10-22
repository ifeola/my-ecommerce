import { Heart } from "lucide-react";
import StarRating from "./StarRating";

const Product = ({ image, name, price, discountPercentage, rating }) => {
  return (
    <li>
      <div className="max-w-full max-h-full relative overflow-hidden border border-neutral-300 bg-neutral-100">
        <img
          src={image}
          alt={name}
          className="object-contain w-full max-h-72"
        />

        <span className="absolute left-2 top-2 py-1 px-2 bg-purple-600 text-white font-medium text-sm capitalize">
          -{discountPercentage}
        </span>
        <button className="group-has-[button] absolute right-2 bg-white top-2 w-10 h-10 place-content-center text-grey font-medium text-sm capitalize rounded-full hidden group-hover:grid">
          <Heart className="group-has-[button]:hover:fill-red-600 group-has-[button]:hover:stroke-red-600" />
        </button>
        {/* <button className="">Add to cart</button> */}
      </div>
      <h1 className="mt-2 text-xl font-medium">{name}</h1>
      <p className="text-base text-purple-600 font-medium">${price}</p>
      <div className="flex items-center gap-2">
        <StarRating starCount={Math.round(rating)} />
        <span className="h-fit">({rating})</span>
      </div>
    </li>
  );
};
export default Product;
