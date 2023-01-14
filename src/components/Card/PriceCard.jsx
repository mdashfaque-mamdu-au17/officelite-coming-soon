import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Heading from '../Texts/Heading';
import Paragraph from '../Texts/Paragraph';
import Button from '../Button/Button';
import BgPattern from '../../assets/home/bg-pattern-pricing.svg';

const PriceCard = (props) => {
  const { premium, heading, price, billCycle, benefit, storage, support } =
    props;

  const commonStyle = () => {
    return 'relative z-20 overflow-hidden w-[327px] rounded-[13px] shadow-card-shadow  sm:w-full sm:max-w-[689px] sm:flex sm:justify-between sm:items-center lg:w-[327px] lg:flex-col lg:justify-center xl:w-[350px]';
  };

  const applyStyle = () => {
    if (!premium) {
      return 'bg-primary-white';
    }
    if (premium) {
      return 'bg-primary-blue';
    }
  };
  return (
    <article className={classNames(commonStyle(), applyStyle())}>
      {premium && (
        <div className="absolute w-[888px] -top-[385px] left-1/2 transform -translate-x-1/2 -z-10 sm:-top-[282px] sm:-left-[319px] sm:transform-none lg:-top-[385px] lg:left-1/2 lg:transform">
          <img src={BgPattern} alt="" className="w-[888px]" />
        </div>
      )}
      <div className="text-center sm:text-left sm:pl-12 lg:text-center lg:pl-0">
        <div className="py-10 sm:pt-12 sm:pb-4 lg:py-10">
          <Heading
            type="secondary-heading"
            styles={!premium ? 'text-primary-dark' : 'text-primary-white'}
          >
            {heading}
          </Heading>
        </div>
        <div>
          <Heading
            type="price-label"
            styles={!premium ? 'text-primary-dark' : 'text-primary-white'}
          >
            {price}
          </Heading>
        </div>
        <div className="pt-2 sm:pt-1 lg:pt-2">
          <Paragraph
            type="secondary"
            styles={!premium ? 'text-primary-dark' : 'text-primary-white'}
          >
            {billCycle}
          </Paragraph>
        </div>
        <div className="hidden sm:block w-[171px] mx-auto pt-6 pb-12 lg:hidden">
          <Button btnType={!premium ? 'light-blue' : 'white'}>
            Try for Free
          </Button>
        </div>
      </div>
      <div className="text-center pt-[56px] sm:text-left sm:pr-[91px] sm:pt-0 lg:text-center lg:pt-[56px] lg:pr-0">
        <div className="pb-4">
          <Paragraph
            type="secondary"
            styles={
              !premium ? 'text-primary-gray' : 'text-primary-white opacity-75'
            }
          >
            {benefit}
          </Paragraph>
        </div>
        <div>
          <Paragraph
            type="secondary"
            styles={
              !premium ? 'text-primary-gray' : 'text-primary-white opacity-75'
            }
          >
            {storage} GB storage
          </Paragraph>
        </div>
        <div className="pt-4">
          <Paragraph
            type="secondary"
            styles={
              !premium ? 'text-primary-gray' : 'text-primary-white opacity-75'
            }
          >
            {support}
          </Paragraph>
        </div>
        <div className="w-[171px] mx-auto pt-8 pb-10 sm:hidden lg:block">
          <Button btnType={!premium ? 'light-blue' : 'white'}>
            Try for Free
          </Button>
        </div>
      </div>
    </article>
  );
};

PriceCard.propTypes = {
  premium: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  billCycle: PropTypes.string.isRequired,
  benefit: PropTypes.string.isRequired,
  storage: PropTypes.number.isRequired,
  support: PropTypes.string.isRequired,
};

export default PriceCard;
