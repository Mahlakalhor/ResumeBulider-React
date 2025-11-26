import logo from "../assets/media/logo.svg";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const DashboardPage = () => {
  const userName = useAuthStore((state) => state.userName);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleCreate = () => {
    if (!resumeTitle.trim()) return;

    navigate("/create-resume");
  };
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
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </nav>
      </header>

      <main>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-2xl font-medium mb-6 bg-linear-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden">
            Welcome, {userName ?? "User"}
          </p>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
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

          <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
            {/* اینجا بعداً map رزومه‌ها میاد */}
          </div>
        </div>
      </main>

      {isModalOpen && (
        <form className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center">
          <div className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6">
            <h2 className="text-xl font-bold mb-4">Create a Resume</h2>

            <input
              placeholder="Enter resume title"
              className="w-full px-4 py-2 mb-4 border rounded focus:border-green-600 focus:ring-green-600"
              type="text"
              value={resumeTitle}
              onChange={(e) => setResumeTitle(e.target.value)}
              required
            />

            <button
              type="button"
              onClick={handleCreate}
              className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              Create Resume
            </button>

            <svg
              onClick={() => setIsModalOpen(false)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
              aria-hidden="true"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </div>
        </form>
      )}
    </div>
  );
};
