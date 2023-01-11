import React from 'react';
import Heading from '../Texts/Heading';
import Paragraph from '../Texts/Paragraph';
import Button from '../Button/Button';
import Illustration from '../../assets/home/illustration-charts.svg';

const Hero = () => {
  return (
    <section className="max-w-[1110px] mx-auto flex flex-col items-center pt-20 sm:flex-row sm:justify-start sm:gap-[63px] md:gap-[95px] sm:px-10 sm:pt-[101px] sm:pb-[140px] xl:px-0 relative z-20 lg:pb-[184px]">
      <div className="w-[171px] h-[192px] shrink-0 sm:order-1 md:w-[281px] md:h-[314px] xl:w-[475px] xl:h-[531px]">
        <img
          src={Illustration}
          alt=""
          className="w-[171px] h-[192px] md:w-[281px] md:h-[314px] xl:w-[475px] xl:h-[531px]"
        />
      </div>
      <div className="px-6 text-center pt-[64px] pb-[100px] sm:text-left sm:px-0 sm:max-w-[345px] sm:pt-0 sm:pb-0 md:max-w-[440px] lg:max-w-[540px]">
        <div>
          <Heading type="main-heading">
            A simple solution to complex tasks is coming soon
          </Heading>
        </div>
        <div className="py-6 lg:pb-8">
          <Paragraph type="primary">
            Say goodbye to inefficient juggling of multiple apps, teams, and
            projects. Officelite is the new collaboration platform built with an
            intuitive interface to improve productivity.
          </Paragraph>
        </div>
        <div className="w-[171px] mx-auto sm:mx-0">
          <Button btnType="blue" applyShadow={true}>
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
