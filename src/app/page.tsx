"use client";

import { faHome, faDonate, faAddressCard, faWallet, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {

  const [menuMobileOpenClose, setMenuMobileOpenClose] = useState(false);

  useEffect(() => {  
    const closeMenuMobile : HTMLElement | null = document.getElementById("menu");

    if(menuMobileOpenClose) {            
      closeMenuMobile?.classList.remove("hidden");
      closeMenuMobile?.classList.add("flex"); 
    } else { 
      closeMenuMobile?.classList.remove("flex");
      closeMenuMobile?.classList.add("hidden");
    }

  },[menuMobileOpenClose]);

  return (
    <main className="w-full flex flex-col pb-4">
      <div id="menu" className="absolute z-50 w-full hidden sm:hidden flex-col items-center px-3 py-2 bg-white shadow-xl justify-center">
        <button id="btn-close" className="text-2xl text-bold mt-4" onClick={ () => setMenuMobileOpenClose(false) }>X</button>
        <div>
          <nav className="flex flex-col mt-8 w-full gap-5">
            <Link href="#" className="flex items-center justify-center gap-2 text-gray-950 font-normal hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300">
              <FontAwesomeIcon icon={ faHome } className="w-5 h-5" /> Home
            </Link>

            <Link href="#" className="flex items-center justify-center gap-2 text-gray-950 font-normal hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300">
              <FontAwesomeIcon icon={ faDonate } className="w-5 h-5" /> Charities
            </Link>

            <Link href="#" className="flex items-center justify-center gap-2 text-gray-950 font-normal hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300">
              <FontAwesomeIcon icon={ faAddressCard } className="w-5 h-5" /> About us
            </Link>
          </nav>
        </div>      
      </div>   
      
      <header className="bg-white w-full py-5 px-3 flex flex-row items-center justify-end">
        <div className="flex gap-3 items-center sm:hidden">          
          <button className="bg-gray-950 hover:bg-gray-600 duration-300 text-white flex items-center justify-center gap-2 px-4 py-2 rounded font-medium">
            <FontAwesomeIcon icon={ faWallet } className="md:ml-1" />
          </button>

          <button id="btn-open" onClick={ () => setMenuMobileOpenClose(true) } className="flex items-center justify-center px-4 py-2">
            <FontAwesomeIcon icon={ faBars } className="font-medium" />
          </button>
        </div>
      </header>
    </main>
  );
}
