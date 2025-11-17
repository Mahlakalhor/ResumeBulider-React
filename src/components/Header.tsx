import logo from "../assets/media/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full py-2.5 font font-medium text-sm bg-linear-to-r from-[#ABFF7E] to-[#FDFEFF] flex justify-center items-center max-h-10">
        <span className="flex rounded-lg m-2 bg-green-600 px-3 py-1 text-white ">
          New
        </span>
        <span className="text-green-800">AI Feature Added</span>
      </div>
      <div className="pb-20">
        <nav className="flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm  ">
          <img src={logo} />
          <div className="hidden md:flex gap-8 items-center transition-all duration-500 text-slate-800 *:cursor-pointer ">
            <a href="#home" className="hover:text-green-600">Home</a>
            <a href="#features" className="hover:text-green-600">
              Features
            </a>
            <a href="#testimonials" className="hover:text-green-600">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-green-600">
              Contact
            </a>
          </div>
          <div className="flex gap-2">
            <Link to="/register">
              <button className="px-6 py-2 bg-green-500 hover:bg-green-700 cursor-pointer rounded-full text-white transition-all">
                Get Started
              </button>
            </Link>
            <Link to="/login">
              <button className="px-6 py-2 border cursor-pointer rounded-full transition-all text-slate-700 hover:bg-slate-50">
                Login
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
