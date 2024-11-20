import React from 'react'
import { SquareChevronRight } from "lucide-react"
import Image from "next/image"
import Link from 'next/link'

const ProductItem = ({product}) => {
    return (
        <Link href={'/project-detail/'+product.documentId}>
        <div className="hover:border hover:border-blue-300 hover:rounded-lg hover:m-1">
            <Image src={product?.banner.url} width={400} height={400} alt='image'className="rounded-t-lg h-[200px] object-cover"/>
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded-b-lg">
            <div className="p-3">
                <h2 className="text-[14px] font-medium line-clamp-1">{product?.title}</h2>
                
                {product.category && <h2 className="text-[12px] text-gray-400 flex gap-1">
      <SquareChevronRight className="w-4 h-4" />
      {product.category}
                </h2> }
            </div>
            <h2 className="font-medium">${product.pricing}</h2>
        </div> 
    </div>
</Link>
    )
}

export default ProductItem
