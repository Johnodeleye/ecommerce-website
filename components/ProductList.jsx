import ProductItem from "./ProductItem"

const ProductList = ({productList}) => {
    return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {productList.map((item, index)=>index<=3&&(
                <div className="" key={index}>
                    <ProductItem product={item}/>
                </div>
            ))}
        </div>
    )
}

export default ProductList
