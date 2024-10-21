import { getArticleImage } from "@/helpers/images";
import { NavbarProps } from "./types";

export const Navbar = ({ className, ...props}: NavbarProps) => {
  return(
    <section className="bg-white py-3 md:mb-10">
      <div className="container max-w-screen-xl mx-auto px-4">
        <nav className="flex-wrap lg:flex items-center">
          <div className="flex items-center mb-10 lg:mb-0">
              <img src={ getArticleImage("navbar-logo.png") } alt="Charity Logo" className="w-28 h-28"/>

              <button className="lg:hidden w-10 h-10 ml-auto flex items-center justify-center border border-blue-500 text-blue-500 rounded-md">
                  <i data-feather="menu"></i>
              </button>
          </div>

          <ul className="lg:flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-14">
              <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
                  <a href="#">Home</a>
              </li>
              <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
                  <a href="#">Charities</a>
              </li>
              <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
                  <a href="#">About us</a>
              </li>
          </ul>

          <div className="lg:flex flex-col md:flex-row md:items-center text-center md:space-x-6">
            <a href="#" className="px-6 py-4 bg-gray-700 text-white font-semibold text-lg rounded-xl hover:bg-gray-600 transition ease-in-out duration-300 mb-5 md:mb-0">Click to donate</a>
          </div>
        </nav>
      </div>
    </section>
  );
}