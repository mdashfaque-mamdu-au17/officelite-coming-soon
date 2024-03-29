import React from 'react';
import Logo from '../../assets/shared/logo.svg';
import BGPatters from '../../assets/home/bg-pattern-header.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="max-w-[1110px] mx-auto">
      <div className="relative z-20 pt-[46px] flex justify-center items-center sm:pt-[72px] lg:pt-[81px] sm:justify-start sm:px-10 xl:px-0">
        <Link to="/" className="pointer-cursor">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <img
        src={BGPatters}
        alt=""
        className="absolute -z-0 w-[458px] -top-[170px] left-1/2 transform -translate-x-1/2  md:w-[666px] md:-top-[164px]  md:right-0 md:translate-x-0 lg:w-[1134px] lg:-top-[419px] lg:translate-x-40 xl:translate-x-20 object-cover"
      />
    </nav>
  );
};

export default Navbar;
