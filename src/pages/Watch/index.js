import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import videosList from "../../json/videos.json";

function Watch() {
    const params = useParams();
    const [video, setVideo] = useState(null);

    useEffect(() => {
        if (videosList.length > 0) {
            let foundVideo = null;

            const video = videosList.find((video) => video.id === params.id);
            if (video) foundVideo = video;

            setVideo(foundVideo);
        }
    }, [params.id]);

    return (
        <section className="flex flex-col">
            {video ? (
                <div className="flex flex-col gap-4 w-full">
                    <div className="w-full bg-black">
                        <iframe
                            className="object-cover w-[100vw] max-w-[1280px] h-[45vw] m-auto"
                            width="100%"
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                        </iframe>
                    </div>

                    <div className="p-4 flex flex-col gap-4 w-full max-w-[1280px] m-auto">
                        <h2 className="font-bold text-4xl">{video.titulo}</h2>

                        <p className="opacity-60">{video.quemPostou} - {video.duracao}</p>
                    </div>
                </div>
            ) : (
                <h2 className="flex-1 flex justify-center items-center">Video não encontrado</h2>
            )}
        </section>
    );
}

export default Watch;
