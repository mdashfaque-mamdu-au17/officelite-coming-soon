import React from 'react';
import CountDown from '../components/Sections/CountDown';
import Intro from '../components/Sections/Intro';
import NavbarSignUp from '../components/Sections/NavbarSignUp';

const SignUp = () => {
  return (
    <section>
      {/* navigation and timer */}
      <div>
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
      <div></div>
    </section>
  );
};

export default SignUp;
