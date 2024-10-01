import Grid from "../../components/Grid";
import { useFavoriteContext } from "../../contexts/favorites";

function Favorites() {
    const { favorite } = useFavoriteContext();

    return (
        <section className="flex flex-col m-auto w-full max-w-[1280px]">
            <h2 className="opacity-60 font-bold text-3xl m-8">Lista de favoritos {favorite.length}</h2>

            <Grid videos={favorite} />
        </section>
    );
}

export default Favorites;