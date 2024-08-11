import { clearFilters } from "@/redux/slice";
import { useDispatch } from "react-redux";


const ClearFilter = () => {
    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(clearFilters());
    };
    return (
        <button
            onClick={handleClear}
            className="p-2 bg-red-500 text-white rounded-md"
        >
            Clear Filters
        </button>
    );
};

export default ClearFilter;