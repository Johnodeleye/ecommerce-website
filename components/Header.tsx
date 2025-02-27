'use client';
import React, { useContext } from "react";
import Image from "next/image"
import { useSession, signOut } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowBigLeftDashIcon, ArrowDownCircle, ShoppingCartIcon } from "lucide-react";
import { ArrowBigDown } from "lucide";
import { CartContext } from "@/app/context/CartContext";
import GlobalApi from "@/utils/GlobalApi";
import Cart from './Cart'
const Header = () => {
  const { data: session } = useSession();
  const {cart,setCart}=useContext(CartContext);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [openCart, setOpenCart]=useState(false)
  //this session email is very important to track someone's email
  const sessionEmail = session?.user?.email;
useEffect(() => {
  const fetchCartItems = async () => {
    if (sessionEmail) {
      try {
        const resp = await GlobalApi.getUserCartItems(sessionEmail);
        console.log("Cart data:", resp.data.data);
        setCart(resp.data.data || []); // Update cart context
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
      }
    }
  };

  fetchCartItems();
}, [sessionEmail, setCart]);

useEffect(()=>{
openCart===false&&setOpenCart(true);
},[cart])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
        if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
            setIsPopupVisible(false);
        }
    };

    document.addEventListener('click', handleClickOutside);

    if (!isPopupVisible) {
        document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
  }
}, [isPopupVisible]);

// const getCartItem=()=>{
//   GlobalApi.getUserCartItems(sessionEmail).then(resp=>{
//     console.log('cart', resp.data.data);
//   });
// }


    return (
<header className="bg-white dark:bg-gray-800">
  <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className= "md:flex md:items-center md:gap-12">
        <a className="block text-teal-600 dark:text-teal-600" href="/">
          <span className="sr-only">Home</span>
          <Image src={'/devlogo.jpeg'} width={50} height={50} alt="logo" className="object-contain rounded-full"/>
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                Home
              </a>
            </li>

            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Careers
              </a>
            </li>

            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="https://perspicaciousdev.vercel.app#projects"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                HubPost
              </a>
            </li>

            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Contact Us
              </a>
            </li>

            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      {session?.user ? (
        
        <>
            <div 
            ref={popupRef}
            className={`absolute z-30 right-0 mr-10 top-20 p-6 shadow-lg shadow-blue-600 border border-blue-500 rounded-md  flex-col gap-2 text-right min-w-[160px] bg-black ${isPopupVisible ? 'flex' : 'hidden'}`}>


                <div className="font-semibold text-left text-green-500">Welcome, {session?.user?.name}
                </div>
                <div className="text-justify">{session?.user?.email}</div>
                <Link onClick={() => setIsPopupVisible(false)} className="text-justify hover:bg-blue-500 hover:text-dark-1 rounded-xl" href={`/authors/${sessionEmail}`}>🟢Go to Profile</Link>
                <Link onClick={() => setIsPopupVisible(false)} className="text-justify hover:bg-blue-500 rounded-xl hover:text-dark-1" href={'/create-post'}>🟢Create Post</Link>
                <Link onClick={() => setIsPopupVisible(false)} className="text-justify hover:bg-blue-500 rounded-xl hover:text-dark-1" href={'https://whatsapp.com/channel/0029Vajn8TuFcovziHg7rM2B'}>🟢Join Community</Link>
                  <button onClick={() => signOut()} className="px-2 py-2 bg-blue-500 rounded">
                      Sign Out
                  </button>
              </div>
              <div className="flex items-center gap-3">
                    <div className="relative cursor-pointer" onClick={() => setIsPopupVisible((prev) => !prev)}>         
                      <Image
                    src={session?.user?.image || '/devlogo.jpg'}
                    width={36}
                    height={36}
                    alt="profile image"
                    className="transition rounded-full shadow md:mr-9 hover:scale-105"
                  />
                  </div>
                  <h2 className="flex gap-1 cursor-pointer" onClick={()=>setOpenCart(!openCart)}><ShoppingCartIcon color="white"/>({cart?.length || 0})</h2>
                  </div>
                  {openCart&&<Cart/>}
                  </>
      ) : (
      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-blue-500"
            href="/login"
          >
            Login
          </a>

          <div className="hidden sm:flex">
            <a
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              href="/register"
            >
              Register
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button
            className="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      )}
    </div>
  </div>
</header>
    )
}

export default Header