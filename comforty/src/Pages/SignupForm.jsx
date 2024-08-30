import React from "react";
import NextArrow from '../assets/svg/arrow-right.svg?react'
import Arrow from '../assets/svg/arrow_short.svg?react'

const SignupForm = () => {
  return (
    <section className="flex flex-col items-center justify-center mb-20 max-w-[1200px] mx-auto ">
      <div className="w-full mb-20 rounded-b-xl bg-secondary-white">
        <div className="mx-auto max-width ">
        <div className="flex items-center mt-[50px] gap-4">
          <span className="flex items-center text-[#636270]">
            Home    </span>
            <Arrow className='text-black'/>
       
          <span className="flex items-center text-[#636270]">
            Account
       
          </span>
          <Arrow className='text-black'/>
          <span>Sign In</span>
        </div>
        <h2 className="text-2xl font-semibold font-inter mt-[14px] mb-[50px]">Sign In</h2>
        </div>

      </div>
      <div className="shadow-custom w-[600px] h-[auto]">
        <div className="text-center">
          <h4 className="pb-1 mt-8 mb-6 text-3xl font-semibold font-inter text-blue">
            Sign In
            <NextArrow/>
          </h4>
        </div>

        <form className="px-6">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your email"
              className="w-full h-[50px] px-3 py-2  text-gray-700 rounded bg-secondary-white font-inter"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Your password"
              className="w-full px-3 py-2  text-gray-700 rounded bg-secondary-white font-inter h-[50px]"
            />
          </div>

          <div className="pt-1 pb-1 mb-12 text-center">
            <button
              className="mb-3  w-full rounded px-6 pb-2 pt-2.5  bg-[#029FAE] flex justify-center items-center gap-3 h-[52px]"
              type="button"
            >
              <span className="text-base leading-normal text-white">
              Sign In 
              </span>
          
              <NextArrow/>

            </button>

              <div  className="flex justify-between">
                <div className="flex flex-row gap-2">
                <input type="checkbox" name="" id="" />
                <span className="text-base font-light font-dmSans leading-[15.4px] text-[#636270]">Remember me</span>
                </div>
              <a href="#!" className="text-base font-semibold font-dmSans text-[#007580]">Forgot password?</a>

              </div>
          </div>

          <div className="flex items-center justify-center pb-6">
            <p className="mb-0 text-blue">Don't Have Account?</p>
            <button
              type="button"
              className="inline-block text-base font-medium leading-normal text-[#007580]"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
