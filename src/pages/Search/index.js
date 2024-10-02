import { useEffect, useState } from 'react';
import Grid from '../../components/Grid';
import { useSearchContext } from '../../contexts/search';
import videos from '../../json/videos.json';

function filterVideos(videos, search) {
    return videos.filter((video) => video.categoria.includes(search) || video.titulo.includes(search));
}

function Search() {
    const { search } = useSearchContext();
    const [foundVideos, setFoundVideos] = useState([]);

    useEffect(() => {
        const filteredVideos = filterVideos(videos, search);
        setFoundVideos(filteredVideos);
    }, [search]);

    return (
        <section className="flex m-auto w-full max-w-[1280px] flex-wrap p-8">
            <h2 className="font-bold text-3xl m-8">
                <span className='font-bold text-3xl opacity-60'>{foundVideos.length} Resultado(s) para </span>
                {search.toUpperCase()}
            </h2>

            <Grid videos={foundVideos} />
        </section>
    )
}

export default Search;
