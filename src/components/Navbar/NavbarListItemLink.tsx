import { cn } from "@/helpers/cn";
import { NavbarListItemLinkProps } from "./types";
import { NavBarListItem } from "./NavBarListItem";
import Link from "next/link";

export const NavbarListItemLink = ({ href, children, className, ...props }: NavbarListItemLinkProps) => {
  return (
    <NavBarListItem className={cn("p-0", className)}>
      <Link href={href} className="my-2 flex items-center text-gray-950 font-medium hover:bg-gray-100 transition ease-in-out duration-300 p-3 rounded-lg" {...props}>
        { children }
      </Link>
    </NavBarListItem>
  );
}