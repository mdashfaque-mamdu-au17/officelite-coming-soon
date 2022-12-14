import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TimeCard = (props) => {
  const { theme, time, unit } = props;

  const applyCommonStyle = () => {
    return 'w-[72px] h-[92px] rounded sm:w-[100px] sm:h-[128px] sm:rounded-[13px]';
  };
  const applyStyle = () => {
    if (theme) {
      return 'bg-primary-dark ';
    }
    if (!theme) {
      return 'bg-light-blue-300';
    }
  };
  return (
    <article
      className={classNames(
        applyCommonStyle(),
        applyStyle(),
        'flex flex-col items-center justify-center'
      )}
    >
      <h4
        className={classNames(
          theme ? 'text-primary-white' : 'text-primary-blue',
          'text-[32px] leading-[48px] font-bold sm:text-[56px]'
        )}
      >
        {time < 10 ? 0 + time : time}
      </h4>
      <p
        className={classNames(
          theme
            ? 'text-primary-white opacity-50'
            : 'text-primary-dark opacity-50',
          'font-bold leading-7 text-xs sm:text-base sm:mt-[5px] text-center'
        )}
      >
        {unit}
      </p>
    </article>
  );
};

TimeCard.propTypes = {
  theme: PropTypes.bool.isRequired,
  time: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
};

export default TimeCard;
