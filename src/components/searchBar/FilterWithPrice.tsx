import { setPriceRange } from "@/redux/slice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const FilterWithPrice = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const dispatch = useDispatch();

  const handlePriceChange = () => {
    dispatch(setPriceRange({ min: minPrice, max: maxPrice }));
  };
  return (
    <div className="flex flex-col gap-4">
      <div className=" flex gap-x-4">
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          placeholder="Min Price"
          className="p-2 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          placeholder="Max Price"
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        onClick={handlePriceChange}
        className="p-2 bg-customAccent2 hover:bg-customAccent1 text-white rounded-md"
      >
        Apply
      </button>
    </div>
  );
};

export default FilterWithPrice;
