import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import Grid from "../../components/Grid";

function Home() {
    return (
        <section className="flex flex-col h-full">
            <Link to="/Search" className="w-1/2 max-w-[800px] cursor-pointer">
                <Banner />
            </Link>

            <Grid />
        </section>
    );
}

export default Home;