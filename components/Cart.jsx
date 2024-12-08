import { CartContext } from "@/app/context/CartContext"
import { useContext, useState } from "react"

const Cart = () => {
    const {cart,setCart}=useContext(CartContext);
    return (
        <div className="h-[300px] w-[250px] bg-gray-900 z-10 rounded-md absolute mx-10 right-10 top-12 p-5 shadow-blue-600 border border-blue-500 overflow-auto shadow-inner">
            <div className="mt-4 space-y-6">
    <ul className="space-y-4">
        {cart.map((item,index)=>(
                  <li className="flex items-center gap-4" key={index}>
                  <img
                    src={item.product?.banner?.url}
                    alt=""
                    className="size-16 rounded object-cover"
                  />
          
                  <div>
                    <h3 className="text-sm text-white">{item.product?.title}</h3>
          
                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-200">
                      <div>
                        <dt className="inline">{item.product?.category}</dt>
                        
                      </div>
          
                      <div>
                        <dt className="inline">${item.product?.pricing}</dt>
                        
                      </div>
                    </dl>
                  </div>
                </li>
        ))}
      </ul>
      </div>

      <div className="space-y-4 text-center mt-5">
      {/* <a
        href="#"
        className="block rounded border border-gray-400 px-5 py-3 text-sm text-white transition hover:ring-1 hover:ring-gray-400"
      >
        View my cart (2)
      </a> */}

      <a
        href="#"
        className="block rounded bg-white px-5 py-3 text-sm text-black transition hover:bg-gray-600 hover:text-white"
      >
        View my Cart ({cart?.length})
      </a>

      <a
        href="#"
        className="inline-block text-sm text-gray-200 underline underline-offset-4 transition hover:text-gray-400"
      >
        Continue shopping
      </a>
    </div>

        </div>
    )
}

export default Cart

// import React, { useContext } from "react";
// import { CartContext } from "@/app/context/CartContext";

// const Cart = () => {
//   const { cart } = useContext(CartContext);

//   return (
//     <div className="h-[300px] w-[250px] bg-gray-700 z-10 rounded-md absolute mx-10 right-10 top-12 p-5 border shadow-md overflow-auto">
//       <ul className="space-y-4">
//         {cart?.map((item, index) => (
//           <li key={index} className="flex items-center gap-4">
//             <img src={item?.product?.banner?.url} alt="" className="w-16 h-16 rounded object-cover" />
//             <div>
//               <h3 className="text-sm text-white">{item?.product?.name}</h3>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cart;
