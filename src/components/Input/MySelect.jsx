import React, { useState } from 'react';
import Option from './Option';
import ArrowDown from '../../assets/sign-up/icon-arrow-down.svg';
import classNames from 'classnames';

const plans = [
  { label: 'Basic Pack', price: 'Free' },
  { label: 'Pro Pack', price: '$9.99' },
  { label: 'Unlimited Pack', price: '$19.99' },
];
const MySelect = ({ onChange }) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(0);

  function menuToggleHandler() {
    setIsSelectOpen(!isSelectOpen);
  }

  function valueChangeHandler(index) {
    setSelectedPlan(index);
    setIsSelectOpen(false);
    onChange(plans[index].label);
  }
  return (
    <div className="relative">
      <div
        className="pb-4 flex justify-between border-b-[1px] border-b-primary-gray/100/50 cursor-pointer relative"
        onClick={menuToggleHandler}
      >
        <div className="pl-4">
          <Option
            label={plans[selectedPlan]?.label}
            price={plans[selectedPlan]?.price}
            renderCorrectIcon={false}
            isSelected={false}
          />
        </div>
        <div
          className={classNames(
            'absolute right-[21px] top-2',
            isSelectOpen && 'rotate-180'
          )}
        >
          <img src={ArrowDown} alt="" />
        </div>
      </div>
      {isSelectOpen && (
        <div className="bg-white absolute mt-2 z-40 w-full py-6 px-8 rounded-lg border-[1px] border-primary-dark/100/1 shadow-drop-down">
          {plans.map((plan, index) => {
            const isLast = plans.length - 1 === index;
            return (
              <div
                className={classNames(
                  !isLast && 'pb-4 border-b-[1px] border-b-primary-gray/100/50',
                  'cursor-default'
                )}
                key={index}
                onClick={() => valueChangeHandler(index)}
              >
                <div className={classNames(index === 0 ? '' : 'pt-4')}>
                  <Option
                    label={plan.label}
                    price={plan.price}
                    renderCorrectIcon={selectedPlan === index}
                    isSelected={selectedPlan === index}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MySelect;
