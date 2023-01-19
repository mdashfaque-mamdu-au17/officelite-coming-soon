import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/shared/logo.svg';
import BGPatters from '../../assets/home/bg-pattern-header.svg';

const NavbarSignUp = () => {
  return (
    <nav className="max-w-[1110px] mx-auto">
      <div className="relative z-20 pt-[46px] flex justify-center items-center sm:justify-start sm:px-10 xl:px-0 sm:pt-[72px] lg:pt-[81px]">
        <Link to="/" className="pointer-cursor">
          <img src={Logo} alt="" />
        </Link>
      </div>

      <img
        src={BGPatters}
        alt=""
        className="absolute -z-0 w-[458px] -top-[170px] left-1/2 transform -translate-x-1/2 object-cover sm:hidden"
      />
    </nav>
  );
};

export default NavbarSignUp;
