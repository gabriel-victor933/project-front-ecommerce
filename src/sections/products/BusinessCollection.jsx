import ProductSlider from "../../components/products/ProductSlider";

// eslint-disable-next-line react/prop-types
export default function BusinessCollection({ selected }){
    console.log(selected)

    return (
        <ProductSlider 
        title={'Business Collection'} 
        subtitle={"Explore timeless elegance with our Formal Elegance collection, featuring refined pieces for a polished look."}
        />
    )
}