import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "../api/axios";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../store/authStore";

type LoginFormType = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<LoginFormType>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (loginUser: LoginFormType) => {
      const { data } = await axios.post("/api/users/login", loginUser);

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.user.name);
      }

      return data;
    },
    onSuccess: () => {
      useAuthStore.getState().setAuth(localStorage.getItem("userName")!);
      navigate("/dashboard");
    },
  });

  const onSubmit = (data: LoginFormType) => {
    mutate(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
      >
        <h1 className="text-gray-900 text-3xl mt-10 font-medium">Login</h1>
        <p className="text-gray-500 text-sm mt-2">Please login to continue</p>

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
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          </svg>

          <input
            {...register("email", { required: true })}
            placeholder="Email id"
            type="email"
            className="outline-none w-full"
            required
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
          >
            <rect width="18" height="11" x="3" y="11" rx="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>

          <input
            {...register("password", { required: true })}
            placeholder="Password"
            type="password"
            className="border-none outline-none ring-0 w-full"
            required
          />
        </div>

        <div className="mt-4 text-left text-green-500">
          <button type="button" className="text-sm">
            Forget password?
          </button>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="mt-2 w-full h-11 rounded-full text-white bg-green-500 hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-60"
        >
          {isPending ? "Logging in..." : "Login"}
        </button>

        <p className="text-gray-500 text-sm mt-3 mb-11">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-500 hover:underline">
            click here
          </Link>
        </p>
      </form>
    </div>
  );
};
