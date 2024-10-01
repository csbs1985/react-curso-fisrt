import videos from "../../json/videos.json";
import Item from "../Item";

function Grid() {
    const categorias = {};

    videos.forEach((video) => {
        if (!categorias[video.categoria]) {
            categorias[video.categoria] = [];
        }
        categorias[video.categoria].push(video);
    });

    return (
        <section className="flex flex-col gap-8 m-auto w-full max-w-[1280px] p-8">
            {Object.keys(categorias).map((categoria) => (
                <div className="flex flex-col gap-4" key={categoria}>
                    <h2 className="opacity-60 font-bold text-3xl">{categoria}</h2>

                    <div className="flex gap-4">
                        {categorias[categoria].map((video) => (
                            <Item video={video} key={video.id} />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Grid;