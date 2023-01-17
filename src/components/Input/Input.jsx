import React from 'react';
import { useField } from 'formik';
import classNames from 'classnames';
import ErrorIcon from '../../assets/sign-up/icon-cross.svg';

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div
      className={classNames(
        'relative border-b-[1px] border-b-primary-gray/100/50 overflow-x-hidden',
        meta.touched && meta.error && 'border-b-primary-red'
      )}
    >
      <label htmlFor={props.id || props.name} hidden>
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={classNames(
          'focus:outline-none pb-[17px] w-full text-primary-dark text-base placeholder:text-base placeholder:text-primary-gray/100/50 leading-7 pl-4',
          meta.touched &&
            meta.error &&
            'text-primary-red placeholder:text-primary-red'
        )}
      />

      {meta.touched && meta.error && (
        <div className="absolute right-[21px] top-1">
          <img src={ErrorIcon} alt="" />
        </div>
      )}
    </div>
  );
};

export default Input;
