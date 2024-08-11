import { setSortOrder } from "@/redux/slice";
import { useDispatch } from "react-redux";


const Sorting = () => {
    const dispatch = useDispatch();

    const handleSort = (order: 'asc' | 'desc') => {
        dispatch(setSortOrder(order));
    };
    return (
        <div className="flex gap-4">
        <button
            onClick={() => handleSort('asc')}
            className="p-2 bg-gray-200 rounded-md"
        >
            Price: Low to High
        </button>
        <button
            onClick={() => handleSort('desc')}
            className="p-2 bg-gray-200 rounded-md"
        >
            Price: High to Low
        </button>
    </div>
    );
};

export default Sorting;