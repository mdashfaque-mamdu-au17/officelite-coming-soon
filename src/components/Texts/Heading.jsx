import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Heading = (props) => {
  const { type, styles } = props;

  const applyStyle = () => {
    if (type === 'main-heading') {
      return 'font-bold text-[40px] leading-[48px] text-primary-dark lg:text-[56px] lg:leading-[64px]';
    }

    if (type === 'price-label') {
      return 'font-bold text-[56px] leading-[64px]';
    }

    if (type === 'secondary-heading') {
      return 'text-xl font-bold leading-7';
    }
  };

  if (type === 'main-heading') {
    return (
      <h1 className={classNames(applyStyle(), styles)}>{props.children}</h1>
    );
  }

  if (type === 'price-label') {
    return (
      <h3 className={classNames(applyStyle(), styles)}>{props.children}</h3>
    );
  }

  if (type === 'secondary-heading') {
    return (
      <h6 className={classNames(applyStyle(), styles)}>{props.children}</h6>
    );
  }
};

Heading.propTypes = {
  type: PropTypes.oneOf(['main-heading', 'price-label', 'secondary-heading'])
    .isRequired,
};

export default Heading;
