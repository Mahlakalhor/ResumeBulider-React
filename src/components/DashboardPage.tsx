import logo from "../assets/media/logo.svg";

export const DashboardPage = () => {
  const userName = "Mahlakalhor";
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="shadow bg-white">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all">
          <a href="/" data-discover="true">
            <img alt="logo" className="h-11 w-auto" src={logo} />
          </a>

          <div className="flex items-center gap-4 text-sm">
            <p className="max-sm:hidden">Hi, {userName}</p>
            <button
              className="bg-white hover:bg-slate-50 border border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all"
              type="button"
            >
              Logout
            </button>
          </div>
        </nav>
      </header>

      <main>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-2xl font-medium mb-6 bg-linear-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden">
            Welcome, {userName}
          </p>

          <div className="flex gap-4">
            <button
              type="button"
              className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-indigo-300 to-indigo-500 text-white rounded-full"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <p className="text-sm group-hover:text-indigo-600 transition-all duration-300">
                Create Resume
              </p>
            </button>

            <button
              type="button"
              className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-cloud-upload size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-purple-300 to-purple-500 text-white rounded-full"
                aria-hidden="true"
              >
                <path d="M12 13v8" />
                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                <path d="m8 17 4-4 4 4" />
              </svg>
              <p className="text-sm group-hover:text-purple-600 transition-all duration-300">
                Upload Existing
              </p>
            </button>
          </div>

          <hr className="border-slate-300 my-6 sm:w-[305px]" />

          {/* {Resume list} */}
          <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
            {/* for resume map */}
          </div>
        </div>
      </main>
    </div>
  );
};
