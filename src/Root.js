// components/Root.js

import { BrowserRouter } from "react-router-dom";
import FavoritesProvider from "./contexts/favorites";
import SearchProvider from "./contexts/search";


const Root = ({ children }) => {
    return (
        <BrowserRouter>
            <FavoritesProvider>
                <SearchProvider>
                    {children}
                </SearchProvider>
            </FavoritesProvider>
        </BrowserRouter>
    );
};

export default Root;