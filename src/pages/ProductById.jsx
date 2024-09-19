import FrequentQuestions from "../sections/productById/FrequentQuestions";
import ProductReviews from "../sections/productById/ProductReviews";
import ProductView from "../sections/productById/ProductView";

export default function ProductById(){

    return (
        <>
            <ProductView />
            <ProductReviews />
            <FrequentQuestions />
        </>
    )
}