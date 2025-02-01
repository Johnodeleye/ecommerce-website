'use client'
import React, {useContext, useState, useEffect} from 'react';
import { CartContext } from '../context/CartContext';
const page = () => {

  const {cart, setCart}=useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(() => {
    cart && getTotalAmount();
  }, [cart]);
  
  const getTotalAmount = () => {
    let total = 0;
    cart.forEach(element => {
      console.log(element.product.pricing);
      total += Number(element.product.pricing);
    });
    setTotalPrice(total);
  };
  
    return (
        
<section className='bg-gray-900'>
  <div className="max-w-screen-xl px-4 py-8 mx-auto bg-gray-900 sm:px-6 sm:py-12 lg:px-8">
    <div className="max-w-3xl mx-auto">
      <header className="text-center">
        <h1 className="text-xl font-bold text--900 sm:text-3xl">Your Cart</h1>
      </header>

      <div className="mt-8">
        <ul className="space-y-4">
          {cart.map((item, index)=>(
                      <li className="flex items-center gap-4" key={index}>
                      <img
                        src={item.product?.banner?.url}
                        alt=""
                        className="object-cover rounded size-16"
                      />
          
                      <div>
                        <h3 className="text-sm text-white">{item.product?.title}</h3>
          
                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-300">
                          <div>
                            <dt className="inline">{item.product?.category}</dt>

                          </div>
          

                        </dl>
                      </div>
          
                      <div className="flex items-center justify-end flex-1 gap-2">
                        
                        {/* <form>
                          <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>
          
                          <input
                            type="number"
                            min="1"
                            value="1"
                            id="Line1Qty"
                            className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                          />
                        </form> */}
                        
                        <div>
                            <dt className="inline">${item.product?.pricing}</dt>
                         
                          </div>
          
                        <button className="text-gray-300 transition hover:text-red-600">
                          <span className="sr-only">Remove item</span>
          
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </li>
          ))}



        </ul>

        <div className="flex justify-end pt-8 mt-8 border-t border-gray-100">
          <div className="w-screen max-w-lg space-y-4">
            <dl className="space-y-0.5 text-sm text-white">


             
              <div className="flex justify-between !text-base font-medium">
                <dt>Total</dt>
                <dd>${totalPrice}</dd>
              </div>
            </dl>

            <div className="flex justify-end">
              <span
                className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="-ms-1 me-1.5 size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>

                <p className="text-xs whitespace-nowrap">2 Discounts Applied</p>
              </span>
            </div>

            <div className="flex justify-end">
              <a
                href="#"
                className="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
       
    )
}

export default page