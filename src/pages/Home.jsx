import DiscoverFashion from "../sections/home/DiscoverFashion";
import Experience from "../sections/home/Experience";
import MainProduct from "../sections/home/MainProduct";
import Testimonials from "../sections/home/Testimonials";

export default function Home(){

    return (
        <>
            <MainProduct />
            <DiscoverFashion />
            <Experience />
            <Testimonials />
        </>
    )
}