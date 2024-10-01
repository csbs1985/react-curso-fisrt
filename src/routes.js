import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import Watch from "./pages/Watch";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/watch/:id" element={<Watch />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
    );
}

export default AppRoutes;