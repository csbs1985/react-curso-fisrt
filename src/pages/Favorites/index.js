import Item from "../../components/Item";
import { useFavoriteContext } from "../../contexts/favorites";

function Favorites() {
    const { favorite } = useFavoriteContext();

    return (
        <section className="flex flex-col gap-8 m-auto w-full max-w-[1280px] p-8">
            <h2 className="opacity-60 font-bold text-3xl">Favoritos</h2>

            {favorite.map((video) => <div key={video.id} className='basis-1/6 flex-1'>
                <Item video={video} />
            </div>
            )}
        </section>
    );
}

export default Favorites;