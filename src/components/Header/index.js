import React from "react";
import { Link } from "react-router-dom";
import { useSearchContext } from "../../contexts/search";

function Header() {
    const { changeSearch } = useSearchContext();

    return (
        <header className="w-screen h-16 bg-black p-4 flex justify-between">
            <Link to="/">
                <h1 className="text-red-600 text-2xl font-bold">Flix</h1>
            </Link>

            <nav className="flex gap-8 items-center">
                <input
                    className="w-80 h-8 rounded-lg px-2 bg-gray-700 text-white"
                    placeholder="Pesquisar"
                    onChange={(e) => changeSearch(e)} />

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