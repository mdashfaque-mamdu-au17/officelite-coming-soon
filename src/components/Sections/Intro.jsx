import React from 'react';
import Heading from '../Texts/Heading';
import Paragraph from '../Texts/Paragraph';

const Intro = () => {
  return (
    <section className="pt-20 pb-16 text-center px-6 sm:w-[573px] sm:px-0 lg:w-[540px] lg:text-left sm:pt-[102px] sm:pb-10 lg:pt-[154px]">
      <div>
        <Heading type="main-heading">Work smarter. Save time.</Heading>
      </div>
      <div className="pt-4 sm:pt-6">
        <Paragraph type="primary">
          Easily manage your projects. Get on the list and receive in-app perks
          available only to early subscribers. We are moving into final
          development and getting ready for official launch soon.
        </Paragraph>
      </div>
    </section>
  );
};

export default Intro;
