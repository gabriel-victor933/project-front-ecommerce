import ProductSlider from "../../components/products/ProductSlider";

// eslint-disable-next-line react/prop-types
export default function FormalCollection({ selected }){
    console.log(selected)

    return (
        <ProductSlider 
        title={'Formal Elegance'} 
        subtitle={"Explore timeless elegance with our Formal Elegance collection, featuring refined pieces for a polished look."}
        />
    )
}