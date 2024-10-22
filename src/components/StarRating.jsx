import { Star } from "lucide-react";

const StarRating = ({ starCount }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((star, index) => {
        const starRating = index + 1;

        return (
          <span key={index}>
            <Star
              className={`stroke-none w-4 ${
                starRating <= starCount ? "fill-yellow-400" : "fill-neutral-400"
              }`}
            />
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
