"use client";
import { Link } from "@nextui-org/react";
import React from "react";
import { useRouter } from "next/navigation";
// import Register from "./unauthenticated/register/page";

const Login = () => {
  const router = useRouter();
  const handleRegister = () => {
    router.push("/home");
  };
  return (
    <div>
      <div class="min-h-screen py-10 main-sec flex justify-center items-center">
        <div class="container mx-auto">
          <div class="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div class="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center login-img">
              <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"></img>
            </div>
            <div class="w-full lg:w-1/2 py-12 px-12">
              <div className="flex justify-center items-center mb-3">
                {/* <Image src="logo2.png" className="flex-grow flex-basis-0"></Image> */}
                <img src="logo2.png" className="w-3/5"></img>
              </div>

              {/* <h2 class="text-3xl mb-4 font-bold">Register</h2> */}
              <p class="mb-4">
                <b>Login into your account.</b>
              </p>

              <div class="mt-5">
                <input
                  type="text"
                  placeholder="Username"
                  class="border border-gray-400 py-2 px-2 w-full rounded-lg"
                ></input>
              </div>
              <div class="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  class="border border-gray-400 py-2 px-2 w-full rounded-lg"
                ></input>
              </div>
              <div class="mt-5 flex justify-between">
                <div>
                  <input
                    type="checkbox"
                    class="border border-gray-400 mr-2"
                  ></input>
                  <span>Remember me</span>
                </div>
                <div>
                  <Link href="">Forget Password?</Link>
                </div>
              </div>
              <div class="mt-5 mb-4">
                <button
                  onClick={handleRegister}
                  class="w-full bg-[#1d3b80] py-3 text-center text-white rounded-lg"
                >
                  Login
                </button>
              </div>
              <p className="text-center">
                Don't have an account?
                <Link href="/register" class="text-[#1d3b80] font-semibold">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
