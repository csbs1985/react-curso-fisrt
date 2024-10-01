import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchContext = React.createContext();

function Header() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    function verifyRoute(event) {
        const query = event.target.value;

        query === "" ? navigate('/') : navigate('/search');
        setSearch(query);
    }

    return (
        <header className="w-screen h-16 bg-black p-4 flex justify-between">
            <Link to="/">
                <h1 className="text-red-600 text-2xl font-bold">Flix</h1>
            </Link>

            <nav className="flex gap-8 items-center">
                <SearchContext.Provider value={{ search, setSearch }}>
                    <input className="w-80 h-8 rounded-lg px-2 bg-gray-700 text-white" placeholder="Pesquisar" onChange={verifyRoute} />
                </SearchContext.Provider>

                <Link to="/">
                    <p className="text-white uppercase">Inicio</p>
                </Link>

                <Link to="/favorites">
                    <p className="text-white uppercase">Favoritos</p>
                </Link>
            </nav>
        </header>
    )
}

export default Header; 