import { Star } from "lucide-react";

const StarRating = ({ starCount }) => {
  return (
    <div className="flex items-center gap-1 mb-3">
      {[...Array(5)].map((star, index) => {
        const starRating = index + 1;

        return (
          <span key={index}>
            <Star
              className={`stroke-none ${
                starRating <= starCount
                  ? "fill-yellow-500"
                  : "fill-neutral-500"
              }`}
            />
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
