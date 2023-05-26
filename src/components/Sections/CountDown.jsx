import React from 'react';
import TimeCard from '../Card/TimeCard';
import useCountDown from '../../hooks/useCountDown';
const CountDown = () => {
  const { countdownTime, expiryTime } = useCountDown();
  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-between ">
      <div className="">
        <div className="text-center lg:text-left">
          <h5 className="text-primary-dark uppercase text-base font-bold leading-[48px] tracking-[5px]">
            Coming <span className="text-primary-blue">5 August 2023</span>
          </h5>
        </div>

        <div className="flex gap-[13px] pt-[18px] sm:pt-2">
          <TimeCard
            theme={false}
            time={String(countdownTime.countdownDays)}
            unit="days"
          />
          <TimeCard
            theme={false}
            time={String(countdownTime.countdownHours)}
            unit="hours"
          />
          <TimeCard
            theme={false}
            time={String(countdownTime.countdownMinutes)}
            unit="mins"
          />
          <TimeCard
            theme={false}
            time={String(countdownTime.countdownSeconds)}
            unit="secs"
          />
        </div>
      </div>
    </div>
  );
};

export default CountDown;
