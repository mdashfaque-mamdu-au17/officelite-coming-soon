import React from 'react';
import { useNavigate } from 'react-router-dom';
import PriceCard from '../Card/PriceCard';
import TimeCard from '../Card/TimeCard';
import Button from '../Button/Button';
import FtPattern from '../../assets/home/bg-pattern-footer.svg';
import useCountDown from '../../hooks/useCountDown';

const Footer = () => {
  const navigate = useNavigate();
  const { countdownTime, expiryTime } = useCountDown();
  const navigateToSignupPage = () => {
    navigate('/signup');
  };
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
          navigate={navigateToSignupPage}
        />

        <PriceCard
          premium={true}
          heading="Pro"
          price="$9.99"
          billCycle="Per user, billed monthly"
          benefit="All essential integrations"
          storage={50}
          support="More control and insights"
          navigate={navigateToSignupPage}
        />

        <PriceCard
          premium={false}
          heading="Ultimate"
          price="$19.99"
          billCycle="Per user, billed monthly"
          benefit="Robust work management"
          storage={100}
          support="VIP support"
          navigate={navigateToSignupPage}
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

        <article className="absolute bottom-[100px]  left-1/2 transform -translate-x-1/2 w-full lg:px-10 xl:px-0 lg:bottom-[91px]">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:max-w-[1110px] lg:mx-auto">
            <div className="">
              <div className="text-center lg:text-left">
                <h5 className="text-primary-white uppercase text-base font-bold leading-[48px] tracking-[5px]">
                  Coming{' '}
                  <span className="text-primary-blue">10 December 2024</span>
                </h5>
              </div>

              <div className="flex gap-[13px] pt-[18px] sm:pt-2">
                <TimeCard
                  theme={true}
                  time={String(countdownTime.countdownDays)}
                  unit="days"
                />
                <TimeCard
                  theme={true}
                  time={String(countdownTime.countdownHours)}
                  unit="hours"
                />
                <TimeCard
                  theme={true}
                  time={String(countdownTime.countdownMinutes)}
                  unit="mins"
                />
                <TimeCard
                  theme={true}
                  time={String(countdownTime.countdownSeconds)}
                  unit="secs"
                />
              </div>
            </div>

            <div className="w-[171px] pt-10 sm:pt-12">
              <Button
                btnType="blue"
                applyShadow={false}
                onClick={navigateToSignupPage}
              >
                Get Started
              </Button>
            </div>
          </div>
        </article>
      </footer>
    </section>
  );
};

export default Footer;
