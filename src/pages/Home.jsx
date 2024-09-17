import DiscoverFashion from "../sections/home/DiscoverFashion";
import Experience from "../sections/home/Experience";
import MainProduct from "../sections/home/MainProduct";
import Questions from "../sections/home/Questions";
import Testimonials from "../sections/home/Testimonials";

export default function Home(){

    return (
        <>
            <MainProduct />
            <DiscoverFashion />
            <Experience />
            <Testimonials />
            <Questions />
        </>
    )
}