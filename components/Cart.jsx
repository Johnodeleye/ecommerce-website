import { CartContext } from "@/app/context/CartContext";
import { useContext, useEffect } from "react";
import { useSession } from "next-auth/react";
import GlobalApi from "@/utils/GlobalApi";

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);
    const { data: session } = useSession();

    useEffect(() => {
        const fetchCart = async () => {
            try {
                if (session?.user?.email) {
                    const response = await GlobalApi.getUserCartItems(session.user.email);
                    setCart(response.data.data); // Adjust according to the response structure from Strapi
                    console.log(response.data.data)
                }
            } catch (error) {
                console.error("Error fetching cart:", error);
            }
        };

        fetchCart();
    }, [session?.user?.email]); // Fetch cart whenever the user logs in

    return (
        <div className="h-[300px] w-[250px] bg-gray-900 z-10 rounded-md absolute mx-10 right-10 top-12 p-5 shadow-blue-600 border border-blue-500 overflow-auto shadow-inner">
            <div className="mt-4 space-y-6">
                <ul className="space-y-4">
                    {cart.map((item, index) => (
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
    );
};

export default Cart;
