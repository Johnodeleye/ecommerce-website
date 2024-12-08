import { CartContext } from "@/app/context/CartContext";
import Skeleton from "@/components/Skeleton";
import authOptions from "@/lib/auth";
import GlobalApi from "@/utils/GlobalApi";

import { ShoppingCart } from "lucide-react";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useContext } from "react";


const ProjectInfo =  ({ product }) => {
  const { data: session, status: sessionStatus } = useSession();
  const {cart,setCart}=useContext(CartContext);
  const onAddtoCartClick=() => {
    if(!session) {
      redirect('/login')
      return;
    }else{
      // logic to add to cart
    const data = {
      data: {
        userName: session.user.name,
        email: session.user.email,
        product: product?.documentId,
      },
    };
  
    GlobalApi.addToCart(data)
      .then((resp) => {
        console.log("Product added to cart successfully!",data);
        setCart(cart=>[...cart,product]);
      })
      .catch((error) => {
        console.error("Failed to add product to cart.");
        console.error("Error adding product to cart:", error.response?.data.error || error.message);
      });
  };
    
  }
  
  return (
    <div>
      {product ? (
        <div>
          <h2 className="text-lg md:text-[20px]">{product?.title}</h2>
          <h2 className="text-sm text-gray-400">{product?.category}</h2>
          <h2 className="text-sm text-gray-300">{product?.description[0].children[0].text}</h2>
          <h2 className="text-xl md:text-[32px] mt-5 text-blue-500 font-medium">$ {product?.pricing}</h2>
          <button className="flex gap-2 p-3 px-3 mt-5 text-white bg-blue-600 rounded-lg md:px-10 hover:bg-blue-900" onClick={onAddtoCartClick}>
            <ShoppingCart /> Add to Cart
          </button>
        </div>
      ) : (
        <Skeleton/>
      )}
    </div>
  );
};

export default ProjectInfo;