import Banner from "../../components/Banner";
import Grid from "../../components/Grid";
import videos from "../../json/videos.json";

function Home() {
    return (
        <section className="flex flex-col h-full">
            <Banner />
            
            <Grid videos={videos} />
        </section>
    );
}

export default Home;