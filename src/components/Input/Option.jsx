import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CorrectIcon from '../../assets/sign-up/icon-check.svg';

const Option = (props) => {
  const { label, price, renderCorrectIcon, isSelected } = props;
  return (
    <div className="relative">
      <p className="text-base leading-7 font-bold text-primary-dark">
        {label} <span className="opacity-40 pl-2">{price}</span>
      </p>
      {isSelected && (
        <div className="absolute right-[7px] top-[9px]">
          <img src={CorrectIcon} alt="" />
        </div>
      )}
    </div>
  );
};

Option.propTypes = {
  label: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  renderCorrectIcon: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
};
export default Option;
