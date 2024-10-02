import { Link } from "react-router-dom";
import { useFavoriteContext } from "../../contexts/favorites";

function Item({ video }) {
    const { favorite, addFavorite } = useFavoriteContext();
    const isFavorite = favorite.some((item) => item.id === video.id);
    const iconColor = isFavorite ? "#FF0000" : "#a6a6a6";

    return (
        <article className="flex flex-col gap-2 basis-1/6">
            <Link to={`/watch/${video.id}`} key={video.id}>
                <figure>
                    <img
                        className="rounded-md"
                        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                        alt={video.titulo} />
                </figure>
            </Link>

            <div className="flex justify-between gap-2">
                <div className="flex flex-col gap-1">
                    <h2 className="font-semibold">{video.titulo}</h2>

                    <p className="opacity-60 text-sm">{video.quemPostou} - {video.duracao}</p>
                </div>

                <figure>
                    <svg
                        onClick={() => addFavorite(video)}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={iconColor}
                        stroke="none"
                        className="feather feather-heart w-6 cursor-pointer"
                        viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                </figure>
            </div>
        </article>
    )
}

export default Item;