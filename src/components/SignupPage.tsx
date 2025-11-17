import { Link } from "react-router-dom";

export const SignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white">
        <h1 className="text-gray-900 text-3xl mt-10 font-medium">Sign up</h1>
        <p className="text-gray-500 text-sm mt-2">
          Please register to continue
        </p>

        <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user-round"
            aria-hidden="true"
          >
            <circle cx="12" cy="8" r="5"></circle>
            <path d="M20 21a8 8 0 0 0-16 0"></path>
          </svg>

          <input
            placeholder="Name"
            className="border-none outline-none ring-0 w-full"
            required
            type="text"
            name="name"
          />
        </div>

        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mail"
            aria-hidden="true"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          </svg>

          <input
            placeholder="Email id"
            className="border-none outline-none ring-0 w-full"
            required
            type="email"
            name="email"
          />
        </div>

        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-lock"
            aria-hidden="true"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>

          <input
            placeholder="Password"
            className="border-none outline-none ring-0 w-full"
            required
            type="password"
            name="password"
          />
        </div>

        <div className="mt-4 text-left text-green-500">
          <button type="reset" className="text-sm">
            Forget password?
          </button>
        </div>

        <Link to="/create-resume">
          <button
            type="submit"
            className="mt-2 w-full h-11 rounded-full text-white bg-green-500 hover:opacity-90 transition-opacity cursor-pointer"
          >
            Sign up
          </button>
        </Link>

        <p className="text-gray-500 text-sm mt-3 mb-11">
          Already have an account?
          <Link to="/login" className="text-green-500 hover:underline ml-1">
            click here
          </Link>
        </p>
      </form>
    </div>
  );
};
