'use client';
import GlobalApi from "../utils/GlobalApi"
import ProductList from "./ProductList"
import { useEffect, useState } from "react"

function ProductSection() {

    const [productList, setProductList]=useState([]);

    useEffect(()=>{
        getLatestProducts_();
    },[])

    const getLatestProducts_=()=>{
        GlobalApi.getLatestProducts().then(resp=>{
            console.log(resp.data.data);
            setProductList(resp.data.data);
        })
    }
    
    const filterProductList=(category)=>{
        const result = productList.filter(item=> item.category===category);
        return result;
    }
    return productList&&(
        <div className="px-10 bg-gray-900 md:px-20">
            {/* Latest Products */}
            <h2 className="font-medium text-[20px]">Brand New</h2>
            <ProductList productList={productList}/>
            
            {/* {Source code product} */}
            <h2 className="font-medium text-[20px] my-3">Source Code</h2>
            <ProductList productList={filterProductList('Website')}/>
            
            {/* {Videos} */}
            <h2 className="font-medium text-[20px] my-3">Videos</h2>
            <ProductList productList={filterProductList('Shorts')}/>
        </div>
    )
}

export default ProductSection