import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favorites";

export default function FavoritesProvider({ children }) {
    const [favorite, setFavorite] = useState([]);

    return (
        <FavoritesContext.Provider value={{ favorite, setFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext);

    function addFavorite(newFavotite) {
        if (!favorite) return;

        const repeatedFavorite = favorite.some((item) => item.id === newFavotite.id);
        let newList = [...favorite];

        if (!repeatedFavorite) {
            newList.push(newFavotite);
        } else {
            newList = newList.filter((item) => item.id !== newFavotite.id);
        }

        return setFavorite(newList);
    }


    return {
        favorite, addFavorite
    }
}