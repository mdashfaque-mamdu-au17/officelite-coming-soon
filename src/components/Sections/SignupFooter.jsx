import React from 'react';
import BgPattern from '../../assets/sign-up/bg-pattern-side.svg';

const SignupFooter = () => {
  return (
    <footer className="bg-secondary-dark mt-[296px] relative h-[320px] overflow-x-hidden overflow-y-hidden sm:h-[380px] lg:h-full lg:mt-0">
      <section className="relative">
        <div className="w-[1202px] h-[1202px] absolute -top-[410px] left-1/2 transform -translate-x-1/2 sm:w-[1454px] sm:h-[1454px] sm:-top-[490px] lg:w-[2036px] lg:h-[2036px] lg:-top-[781px] lg:left-[256px]">
          <img
            src={BgPattern}
            alt=""
            className="w-[1202px] h-[1202px] sm:w-[1454px] sm:h-[1454px] lg:w-[2036px] lg:h-[2036px]"
          />
        </div>
      </section>
    </footer>
  );
};

export default SignupFooter;
