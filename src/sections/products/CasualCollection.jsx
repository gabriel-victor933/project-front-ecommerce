import ProductSlider from "../../components/product/ProductSlider";

// eslint-disable-next-line react/prop-types
export default function CasualCollection({ selected }){
    console.log(selected)

    return (
        <ProductSlider 
        title={'Casual Collection'} 
        subtitle={"Discover our versatile men's casual wear collection, where comfort meets contemporary fashion."}
        />
    )
}