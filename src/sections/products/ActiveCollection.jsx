import ProductSlider from "../../components/products/ProductSlider";

// eslint-disable-next-line react/prop-types
export default function ActiveCollection({ selected }){
    console.log(selected)

    return (
        <ProductSlider 
        title={'Active Lifestyle'} 
        subtitle={"Embrace an active lifestyle with our performance-driven men's wear, designed for comfort and flexibility."}
        />
    )
}