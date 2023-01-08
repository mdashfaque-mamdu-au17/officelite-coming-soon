import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Paragraph = (props) => {
  const { type, styles } = props;

  const applyStyle = () => {
    if (type === 'primary') {
      return 'text-base leading-[26px] font-normal text-primary-gray lg:text-lg lg:leading-7';
    }
    if (type === 'secondary') {
      return 'text-base leading-7 font-normal';
    }
  };

  return <p className={classNames(applyStyle(), styles)}>{props.children}</p>;
};

Paragraph.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
};

export default Paragraph;
