import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = (props) => {
  const { btnType, applyShadow, styles } = props;

  const applyCommonStyle = () => {
    return 'rounded-[28px] w-full font-bold text-base leading-7';
  };
  const applyStyle = () => {
    if (btnType === 'blue') {
      return 'h-14 bg-primary-blue text-primary-white hover:bg-secondary-blue transition delay-200 ease-in-out hover:transition hover:delay-200 hover:ease-linear';
    }
    if (btnType === 'light-blue') {
      return 'h-14 rounded-[28px] bg-light-blue text-primary-blue hover:bg-light-blue-200 transition delay-200 ease-in-out hover:transition hover:delay-200 hover:ease-linear';
    }
    if (btnType === 'white') {
      return 'h-14  bg-primary-white text-secondary-blue';
    }
  };
  return (
    <button
      className={classNames(
        applyCommonStyle(),
        applyStyle(),
        applyShadow && 'shadow-shadow-blue-btn',
        styles
      )}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  btnType: PropTypes.oneOf(['blue', 'light-blue', 'white']).isRequired,
  applyShadow: PropTypes.bool,
};

export default Button;
