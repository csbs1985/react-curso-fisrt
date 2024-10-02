import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const SearchContext = createContext();
SearchContext.displayName = "Search";

export default function SearchProvider({ children }) {
    const [search, setSearch] = useState("");

    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            {children}
        </SearchContext.Provider>
    );
}

export function useSearchContext() {
    const { search, setSearch } = useContext(SearchContext);
    const navigate = useNavigate();

    function changeSearch(newValue) {
        const query = newValue.target.value;

        query === "" ? navigate('/') : navigate('/search');

        return setSearch(query);
    }

    return { search, changeSearch }
}