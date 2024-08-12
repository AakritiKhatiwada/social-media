"use client";
import React from "react";
import { Link } from "@nextui-org/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import * as yup from "yup";
import { Input } from "@nextui-org/react";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required*"),

  email: Yup.string().email("Invalid email").required("Required*"),

  password: yup
    .string()
    .min(8, "Passwords must be 8 characters long")
    .required("Required*"),

  phonenumber: yup
    .number()
    .min(10, "Invalid Number")
    .max(10, "Invalid Number")
    .required("Required*"),

  confirmpassword: yup
    .string()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const register = () => (
  <div>
    <div className="min-h-screen py-10 main-sec flex justify-center items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center login-img">
            <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"></img>
          </div>
          <div className="w-full lg:w-1/2 py-12 px-12">
            <div className="flex justify-center items-center mb-3">
              <img src="logo2.png" className="w-3/5"></img>
            </div>
            <p className="mb-4">
              Create your account. It’s free and only take a minute
            </p>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phonenumber: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                // same shape as initial values
                console.log(values);
              }}
            >
              {({ errors, touched, handleChange }) => (
                <Form>
                  <div className="mt-5">
                    <input
                      onChange={handleChange}
                      name="firstName"
                      type="text"
                      placeholder="Fullname"
                      className="border border-gray-400 py-2 px-2 w-full rounded-lg"
                    />
                    {errors.firstName && touched.firstName ? (
                      <div className="text-red-600 text-xs">
                        {errors.firstName}
                      </div>
                    ) : null}
                  </div>

                  <div className="grid grid-cols-2 gap-5 mt-5">
                    <div className="flex flex-col">
                      <input
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="border border-gray-400 py-2 px-2 rounded-lg"
                      />
                      {errors.email && touched.email ? (
                        <div className="text-red-600 text-xs">
                          {errors.email}
                        </div>
                      ) : null}
                    </div>
                    <div className="flex flex-col">
                      <input
                        onChange={handleChange}
                        name="phonenumber"
                        type="text"
                        placeholder="Phone Number"
                        className="border border-gray-400 py-2 px-2 rounded-lg"
                      />
                      {errors.phonenumber && touched.phonenumber ? (
                        <div className="text-red-600 text-xs">
                          {errors.phonenumber}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-5">
                    <input
                      onChange={handleChange}
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="border border-gray-400 py-2 px-2 w-full rounded-lg"
                    />
                    {errors.password && touched.password ? (
                      <div className="text-red-600 text-xs">
                        {errors.password}
                      </div>
                    ) : null}
                  </div>
                  <div className="mt-5">
                    <input
                      onChange={handleChange}
                      name="confirmpassword"
                      type="password"
                      placeholder="Confirm Password"
                      className="border border-gray-400 py-2 px-2 w-full rounded-lg"
                    />
                    {errors.confirmpassword && touched.confirmpassword ? (
                      <div className="text-red-600 text-xs">
                        {errors.confirmpassword}
                      </div>
                    ) : null}
                  </div>
                  <div className="mt-5">
                    <input
                      type="checkbox"
                      className="border border-gray-400 mr-2"
                    ></input>
                    <span>
                      I accept the
                      <a href="#" className="text-[#1d3b80] font-semibold">
                        Terms of Use &nbsp;
                      </a>
                      &
                      <a href="#" className="text-[#1d3b80] font-semibold">
                        &nbsp; Privacy Policy
                      </a>
                    </span>
                  </div>
                  <div className="mt-5 mb-4">
                    <button className="w-full bg-[#1d3b80] py-3 text-center text-white rounded-lg">
                      Register Now
                    </button>
                  </div>
                  <p className="text-center">
                    Already have an account?
                    <Link
                      href="/login"
                      className="text-[#1d3b80] font-semibold"
                    >
                      Login
                    </Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default register;

// "use client";
// import { Link } from "@nextui-org/react";
// import React from "react";

// const register = () => {
//   return (
//     <div>
//       <div className="min-h-screen py-10 main-sec flex justify-center items-center">
//         <div className="container mx-auto">
//           <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
//             <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center login-img">
//               <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"></img>
//             </div>
//             <div className="w-full lg:w-1/2 py-12 px-12">
//               <div className="flex justify-center items-center mb-3">
//                 <img src="logo2.png" className="w-3/5"></img>
//               </div>
//               <p className="mb-4">
//                 Create your account. It’s free and only take a minute
//               </p>

//               <form>
//                 <div className="mt-5">
//                   <input
//                     type="text"
//                     placeholder="Fullname"
//                     className="border border-gray-400 py-2 px-2 w-full rounded-lg"
//                   ></input>
//                 </div>
//                 <div className="grid grid-cols-2 gap-5 mt-5">
//                   <input
//                     type="text"
//                     placeholder="Email"
//                     className="border border-gray-400 py-2 px-2 rounded-lg"
//                   ></input>
//                   <input
//                     type="text"
//                     placeholder="Phone Number"
//                     className="border border-gray-400 py-2 px-2 rounded-lg"
//                   ></input>
//                 </div>
//                 <div className="mt-5">
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     className="border border-gray-400 py-2 px-2 w-full rounded-lg"
//                   ></input>
//                 </div>
//                 <div className="mt-5">
//                   <input
//                     type="password"
//                     placeholder="Confirm Password"
//                     className="border border-gray-400 py-2 px-2 w-full rounded-lg"
//                   ></input>
//                 </div>
//                 <div className="mt-5">
//                   <input
//                     type="checkbox"
//                     className="border border-gray-400 mr-2"
//                   ></input>
//                   <span>
//                     I accept the
//                     <a href="#" className="text-[#1d3b80] font-semibold">
//                       Terms of Use &nbsp;
//                     </a>
//                     &
//                     <a href="#" className="text-[#1d3b80] font-semibold">
//                       &nbsp; Privacy Policy
//                     </a>
//                   </span>
//                 </div>
//                 <div className="mt-5 mb-4">
//                   <button className="w-full bg-[#1d3b80] py-3 text-center text-white rounded-lg">
//                     Register Now
//                   </button>
//                 </div>
//                 <p className="text-center">
//                   Already have an account?
//                   <Link href="/" className="text-[#1d3b80] font-semibold">
//                     Login
//                   </Link>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default register;
