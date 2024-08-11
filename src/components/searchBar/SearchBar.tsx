import { setSearchTerm } from "@/redux/slice";
import { useState } from "react";
import { useDispatch } from "react-redux";


const SearchBar = () => {
    const [searchTerm, setSearchTermInput] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTermInput(value);
        dispatch(setSearchTerm(value));
    };
    return (
        <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by name or brand"
            className="w-full p-2 border border-gray-300 rounded-md"
        />
    );
};

export default SearchBar;