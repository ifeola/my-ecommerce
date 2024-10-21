import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const Counter = ({ minimumOrderQuantity }) => {
  const [count, setCount] = useState(minimumOrderQuantity);
  return (
    <div>
      <div className="flex items-center border border-neutral-600 w-fit">
        <button
          className={`p-1 bg-neutral-400 border-r border-r-neutral-600 ${
            count === minimumOrderQuantity
              ? "pointer-events-none text-neutral-500"
              : "pointer-events-auto"
          } hover:bg-purple-600`}
          onClick={() => setCount(count - 1)}>
          <Minus />
        </button>
        <span className="max-w-24 block w-20 text-center select-none">
          {count}
        </span>
        <button
          className="p-1 bg-neutral-400 border-l border-l-neutral-600 hover:bg-purple-600"
          onClick={() => setCount(count + 1)}>
          <Plus />
        </button>
      </div>
    </div>
  );
};
export default Counter;
