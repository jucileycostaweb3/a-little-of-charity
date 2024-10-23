import { NavbarProps } from "./types";
import { NavBarList } from "./NavBarList";
import { NavbarListItemLink } from "./NavbarListItemLink";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" ;
import { faHome, faDonate, faAddressCard, faWallet } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/helpers/cn";
import { getImage } from "@/helpers/images";


export const Navbar = ({ className, ...props}: NavbarProps) => {
  return(
    <aside className="border-r-2 hidden sm:flex w-full max-w-[200px] min-h-screen relative bg-white flex-col px-2 py-5 border-gray-950">
      <div className="fixed">
        <div>
          <h1 className="text-orange-500 text-lg font-thin">A little of charity</h1>
          <Image alt="Charity Logo" src={ getImage("navbar-logo.png") } width={112} height={112} className="hover:scale-110 duration-200 mt-3"/>
        </div>

        <nav className={cn("flex flex-col mt-8 w-full gap-5 border-t-2 border-b-2 border-gray-950", className)} {...props}>
          <NavBarList>
            <NavbarListItemLink href="#">
              <FontAwesomeIcon icon={ faHome } className="w-4 h4 mr-2" /> Home
            </NavbarListItemLink>
            
            <NavbarListItemLink href="#">
              <FontAwesomeIcon icon={ faDonate } className="w-4 h4 mr-2" /> Charities
            </NavbarListItemLink>
            
            <NavbarListItemLink href="#">
              <FontAwesomeIcon icon={ faAddressCard } className="w-4 h4 mr-2" /> About us
            </NavbarListItemLink>
          </NavBarList>
        </nav>
      </div>

      <div>
        <Link href="#" className="flex items-center justify-center top-[450px] w-16 h-16 rounded-full bg-gray-100 fixed z-30 left-11 hover:bg-gray-200 duration-200">
          <FontAwesomeIcon icon={ faWallet } className="w-7 h-7" />
        </Link>

        <div className="fixed top-[515px]">
          <Link href="#">
            Connect your wallet
          </Link>
        </div>
      </div>
    </aside>      
  );
}