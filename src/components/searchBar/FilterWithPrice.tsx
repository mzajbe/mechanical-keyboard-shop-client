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
        <div className="flex gap-4">
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
            <button
                onClick={handlePriceChange}
                className="p-2 bg-blue-500 text-white rounded-md"
            >
                Apply
            </button>
        </div>
    );
};

export default FilterWithPrice;