import React, { useContext, useEffect, useState } from 'react';
import Item from '../../components/Item';
import videos from '../../json/videos.json';

const SearchContext = React.createContext();

function filterVideos(videos, search) {
    return videos.filter((video) => video.categoria.includes(search) || video.titulo.includes(search));
}

function Search() {
    const search = useContext(SearchContext);
    const [foundVideos, setFoundVideos] = useState([]);

    useEffect(() => {
        const filteredVideos = filterVideos(videos, search);
        setFoundVideos(filteredVideos);
    }, [search]);

    return (
        <section className="flex gap-8 m-auto w-full max-w-[1280px] flex-wrap p-8">
            {foundVideos.map((video) => <div key={video.id} className='basis-1/6 flex-1'>
                <Item video={video} />
            </div>
            )}
        </section>
    )
}

export default Search;