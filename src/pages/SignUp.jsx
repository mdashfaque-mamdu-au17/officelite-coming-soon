import React from 'react';
import CountDown from '../components/Sections/CountDown';
import Intro from '../components/Sections/Intro';
import NavbarSignUp from '../components/Sections/NavbarSignUp';
import SignupFooter from '../components/Sections/SignupFooter';
import SignupForm from '../components/Sections/SignupForm';

const SignUp = () => {
  return (
    <section className="relative">
      {/* navigation and timer */}
      <div className="">
        <div>
          <NavbarSignUp />
        </div>
        <div className="max-w-[1110px] mx-auto flex justify-center items-center lg:justify-start lg:pl-10 xl:pl-0">
          <Intro />
        </div>
        <div className="max-w-[1110px] mx-auto lg:pl-10 xl:pl-0">
          <CountDown />
        </div>
      </div>

      {/* contact form and footer */}
      <div className="bg-green-300 lg:absolute lg:top-0 lg:right-0 lg:w-[420px] lg:h-screen">
        <div className="relative bg-white z-30">
          <div className="absolute -top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 shadow-card-shadow lg:top-[237px] lg:transform-none lg:-left-10 xl:-left-[165px]">
            <SignupForm />
          </div>
        </div>
        <SignupFooter />
      </div>
    </section>
  );
};

export default SignUp;
