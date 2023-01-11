import React from 'react';
import PriceCard from '../Card/PriceCard';
import FtPattern from '../../assets/home/bg-pattern-footer.svg';

const Footer = () => {
  return (
    <section className="relative pt-[794px] sm:pt-[498px] lg:pt-[254px]">
      <section className="absolute top-0 flex flex-col gap-8 w-full  items-center sm:px-10 sm:gap-6 lg:flex-row lg:justify-center xl:gap-[30px]">
        <PriceCard
          premium={false}
          heading="Basic"
          price="Free"
          billCycle="Up to 5 users for free"
          benefit="Basic document collaboration"
          storage={2}
          support="Great security and support"
        />

        <PriceCard
          premium={true}
          heading="Pro"
          price="$9.99"
          billCycle="Per user, billed monthly"
          benefit="All essential integrations"
          storage={50}
          support="More control and insights"
        />

        <PriceCard
          premium={false}
          heading="Ultimate"
          price="$19.99"
          billCycle="Per user, billed monthly"
          benefit="Robust work management"
          storage={100}
          support="VIP support"
        />
      </section>
      <footer className="bg-secondary-dark relative h-[1248px] overflow-x-hidden overflow-y-hidden sm:h-[986px] lg:h-[603px]">
        <div className="w-[1202px] h-[1202px]  absolute top-[156px] left-1/2 transform -translate-x-1/2 sm:top-4 sm:w-[1454px] sm:h-[1454px] lg:w-[2036px] lg:h-[2036px] lg:top-1/2 lg:-translate-y-1/2 lg:left-1/4">
          <img
            src={FtPattern}
            alt=""
            className="w-[1202px] h-[1202px] sm:w-[1454px] sm:h-[1454px] lg:w-[2036px] lg:h-[2036px]"
          />
        </div>
      </footer>
    </section>
  );
};

export default Footer;
