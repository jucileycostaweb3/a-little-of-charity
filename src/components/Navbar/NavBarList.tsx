import { NavbarListProps } from "./types";

export const NavBarList = ({ children, ...props }: NavbarListProps) => {
  return (
    <ul className="my-4 w-full" {...props}>
      { children }
    </ul>
  );
};
