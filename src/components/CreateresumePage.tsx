import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/media/logo.svg";
import { useAuthStore } from "../store/authStore";

type TemplateKey = "classic" | "modern" | "minimalImage" | "minimal";
type AccentKey =
  | "blue"
  | "indigo"
  | "purple"
  | "green"
  | "red"
  | "orange"
  | "teal"
  | "pink"
  | "gray"
  | "black";

const accentColors: Record<AccentKey, string> = {
  blue: "#3b82f6",
  indigo: "#6366f1",
  purple: "#a855f7",
  green: "#22c55e",
  red: "#ef4444",
  orange: "#f97316",
  teal: "#14b8a6",
  pink: "#ec4899",
  gray: "#6b7280",
  black: "#111827",
};

export const CreateresumePage = () => {
  const userName = useAuthStore((state) => state.userName);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const [selectedTemplate, setSelectedTemplate] =
    useState<TemplateKey>("classic");
  const [accent, setAccent] = useState<AccentKey>("blue");

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header بالا */}
      <header className="shadow bg-white">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all">
          <Link to="/dashboard" data-discover="true">
            <img alt="logo" className="h-11 w-auto" src={logo} />
          </Link>

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

      {/* Back to Dashboard */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link
          to="/dashboard"
          className="inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all"
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
            className="lucide lucide-arrow-left size-4"
            aria-hidden="true"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back to Dashboard
        </Link>
      </div>

      {/* بخش اصلی Builder */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* ستون چپ: Template + فرم اطلاعات */}
          <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1 relative">
              {/* نوار بالایی خاکستری و سبز */}
              <hr className="absolute top-0 left-0 right-0 border-2 border-gray-200" />
              <hr
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-500 to-green-600 border-none transition-all duration-700"
                style={{ width: "100%" }}
              />

              {/* Template / Accent / Next */}
              <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-1">
                <div className="flex items-center gap-2">
                  {/* Template */}
                  <div className="relative">
                    <button className="flex items-center gap-1 text-sm text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 ring-blue-300 hover:ring transition-all px-3 py-2 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-panels-top-left"
                        aria-hidden="true"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                        <path d="M3 9h18"></path>
                        <path d="M9 21V9"></path>
                      </svg>
                      <span className="max-sm:hidden">Template</span>
                    </button>

                    {/* لیست Templateها */}
                    <div className="absolute top-full w-[260px] p-3 mt-2 space-y-3 z-10 bg-white rounded-md border border-gray-200 shadow-sm">
                      {/* Classic */}
                      <div
                        className={`relative p-3 border rounded-md cursor-pointer transition-all ${
                          selectedTemplate === "classic"
                            ? "border-blue-400 bg-blue-100"
                            : "border-gray-300 hover:border-gray-400 hover:bg-gray-100"
                        }`}
                        onClick={() => setSelectedTemplate("classic")}
                      >
                        <div className="space-y-1">
                          <h4 className="font-medium text-gray-800">Classic</h4>
                          <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-gray-500 italic">
                            A clean, traditional resume format with clear
                            sections and professional typography
                          </div>
                        </div>
                      </div>

                      {/* Modern */}
                      <div
                        className="relative p-3 border rounded-md cursor-pointer transition-all border-gray-300 hover:border-gray-400 hover:bg-gray-100"
                        onClick={() => setSelectedTemplate("modern")}
                      >
                        <div className="space-y-1">
                          <h4 className="font-medium text-gray-800">Modern</h4>
                          <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-gray-500 italic">
                            Sleek design with strategic use of color and modern
                            font choices
                          </div>
                        </div>
                      </div>

                      {/* Minimal Image */}
                      <div
                        className="relative p-3 border rounded-md cursor-pointer transition-all border-gray-300 hover:border-gray-400 hover:bg-gray-100"
                        onClick={() => setSelectedTemplate("minimalImage")}
                      >
                        <div className="space-y-1">
                          <h4 className="font-medium text-gray-800">
                            Minimal Image
                          </h4>
                          <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-gray-500 italic">
                            Minimal design with a single image and clean
                            typography
                          </div>
                        </div>
                      </div>

                      {/* Minimal (انتخاب شده در اسکرین) */}
                      <div
                        className={`relative p-3 border rounded-md cursor-pointer transition-all ${
                          selectedTemplate === "minimal"
                            ? "border-blue-400 bg-blue-100"
                            : "border-gray-300 hover:border-gray-400 hover:bg-gray-100"
                        }`}
                        onClick={() => setSelectedTemplate("minimal")}
                      >
                        {selectedTemplate === "minimal" && (
                          <div className="absolute top-2 right-2">
                            <div className="size-5 bg-blue-400 rounded-full flex items-center justify-center">
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
                                className="lucide lucide-check w-3 h-3 text-white"
                                aria-hidden="true"
                              >
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </div>
                          </div>
                        )}

                        <div className="space-y-1">
                          <h4 className="font-medium text-gray-800">Minimal</h4>
                          <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-gray-500 italic">
                            Ultra-clean design that puts your content front and
                            center
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Accent (پالت رنگ) */}
                  <div className="relative">
                    <button className="flex items-center gap-1 text-sm text-purple-600 bg-gradient-to-br from-purple-50 to-purple-100 ring-purple-300 hover:ring transition-all px-3 py-2 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-palette"
                        aria-hidden="true"
                      >
                        <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                        <circle
                          cx="17.5"
                          cy="10.5"
                          r=".5"
                          fill="currentColor"
                        />
                        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                      </svg>
                      <span className="max-sm:hidden">Accent</span>
                    </button>

                    {/* پالت رنگ‌ها همیشه باز (مثل اسکرین دوم) */}
                    <div className="absolute top-full mt-2 bg-white border border-gray-200 rounded-md shadow-sm p-3 z-10">
                      <div className="grid grid-cols-5 gap-2">
                        {(Object.keys(accentColors) as AccentKey[]).map(
                          (key) => (
                            <button
                              key={key}
                              type="button"
                              onClick={() => setAccent(key)}
                              className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                                accent === key
                                  ? "border-blue-500"
                                  : "border-transparent"
                              }`}
                              style={{ backgroundColor: accentColors[key] }}
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <button className="flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all">
                    Next
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
                      className="lucide lucide-chevron-right size-4"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* فرم Personal Information */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Personal Information
                  </h3>
                  <p className="text-sm text-gray-600">
                    Get Started with the personal information
                  </p>

                  {/* Upload Image */}
                  <div className="flex items-center gap-2">
                    <label>
                      <div className="inline-flex items-center gap-2 mt-5 text-slate-600 hover:text-slate-700 cursor-pointer">
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
                          className="lucide lucide-user size-10 p-2.5 border rounded-full"
                          aria-hidden="true"
                        >
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        upload user image
                      </div>
                      <input
                        accept="image/jpeg, image/png"
                        className="hidden"
                        type="file"
                      />
                    </label>
                  </div>

                  {/* Full Name */}
                  <div className="space-y-1 mt-5">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
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
                        className="lucide lucide-user size-4"
                        aria-hidden="true"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      Full Name
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm"
                      placeholder="Enter your full name"
                      type="text"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1 mt-5">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
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
                        className="lucide lucide-mail size-4"
                        aria-hidden="true"
                      >
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      </svg>
                      Email Address
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm"
                      placeholder="Enter your email address"
                      type="email"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1 mt-5">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
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
                        className="lucide lucide-phone size-4"
                        aria-hidden="true"
                      >
                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                      </svg>
                      Phone Number
                    </label>
                    <input
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm"
                      placeholder="Enter your phone number"
                      type="tel"
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-1 mt-5">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
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
                        className="lucide lucide-map-pin size-4"
                        aria-hidden="true"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      Location
                    </label>
                    <input
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm"
                      placeholder="Enter your location"
                      type="text"
                    />
                  </div>

                  {/* Profession */}
                  <div className="space-y-1 mt-5">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
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
                        className="lucide lucide-briefcase-business size-4"
                        aria-hidden="true"
                      >
                        <path d="M12 12h.01"></path>
                        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                        <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
                        <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                      </svg>
                      Profession
                    </label>
                    <input
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm"
                      placeholder="Enter your profession"
                      type="text"
                    />
                  </div>

                  {/* LinkedIn */}
                  <div className="space-y-1 mt-5">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
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
                        className="lucide lucide-linkedin size-4"
                        aria-hidden="true"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      LinkedIn Profile
                    </label>
                    <input
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm"
                      placeholder="Enter your linkedin profile"
                      type="url"
                    />
                  </div>

                  {/* Personal Website */}
                  <div className="space-y-1 mt-5">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
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
                        className="lucide lucide-globe size-4"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      Personal Website
                    </label>
                    <input
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm"
                      placeholder="Enter your personal website"
                      type="url"
                    />
                  </div>
                </div>
              </div>

              <button className="bg-gradient-to-br from-green-100 to-green-200 ring-green-300 text-green-600 ring hover:ring-green-400 transition-all rounded-md px-6 py-2 mt-6 text-sm">
                Save Changes
              </button>
            </div>
          </div>

          {/* ستون راست: Preview + Share / Download */}
          <div className="lg:col-span-7 max-lg:mt-6">
            <div className="relative w-full">
              <div className="absolute bottom-3 left-0 right-0 flex items-center justify-end gap-2">
                <button className="flex items-center p-2 px-4 gap-2 text-xs bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 rounded-lg ring-blue-300 hover:ring transition-colors">
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
                    className="lucide lucide-share-2 size-4"
                    aria-hidden="true"
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                  </svg>
                  Share
                </button>

                <button className="flex items-center p-2 px-4 gap-2 text-xs bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600 ring-purple-300 rounded-lg hover:ring transition-colors">
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
                    className="lucide lucide-eye size-4"
                    aria-hidden="true"
                  >
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  Public
                </button>

                <button className="flex items-center gap-2 px-6 py-2 text-xs bg-gradient-to-br from-green-100 to-green-200 text-green-600 rounded-lg ring-green-300 hover:ring transition-colors">
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
                    className="lucide lucide-download size-4"
                    aria-hidden="true"
                  >
                    <path d="M12 15V3"></path>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <path d="m7 10 5 5 5-5"></path>
                  </svg>
                  Download
                </button>
              </div>
            </div>

            <div className="w-full bg-gray-100">
              <div
                id="resume-preview"
                className="border border-gray-200 print:shadow-none print:border-none"
              >
                <div className="max-w-4xl mx-auto p-8 bg-white text-gray-900 font-light">
                  <header className="mb-10">
                    <h1 className="text-4xl font-thin mb-4 tracking-wide">
                      Your Name
                    </h1>
                    <div className="flex flex-wrap gap-6 text-sm text-gray-600" />
                  </header>

                  <section className="mb-10">
                    <h2
                      className="text-sm uppercase tracking-widest mb-6 font-medium"
                      style={{ color: accentColors[accent] }}
                    >
                      Experience
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-baseline mb-1">
                          <h3 className="text-lg font-medium"></h3>
                          <span className="text-sm text-gray-500"> - </span>
                        </div>
                        <p className="text-gray-600 mb-2"></p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              {/* استایل پرینت همون چیزی که از سایت دیدی */}
              <style>
                {`
                  @page {
                    size: letter;
                    margin: 0;
                  }
                  @media print {
                    html, body {
                      width: 8.5in;
                      height: 11in;
                      overflow: hidden;
                    }
                    body * {
                      visibility: hidden;
                    }
                    #resume-preview, #resume-preview * {
                      visibility: visible;
                    }
                    #resume-preview {
                      position: absolute;
                      left: 0;
                      top: 0;
                      width: 100%;
                      height: auto;
                      margin: 0;
                      padding: 0;
                      box-shadow: none !important;
                      border: none !important;
                    }
                  }
                `}
              </style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
