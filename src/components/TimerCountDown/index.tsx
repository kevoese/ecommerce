'use client';

import React from 'react';

interface Props {
  countdown: number;
  className?: string;
}

const getTimeInfo = (timestamp: number) => {
  const timestampDiff = new Date(timestamp).getTime() - Date.now();
  const days = Math.floor(timestampDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timestampDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timestampDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((timestampDiff / 1000) % 60);
  // return days, hours, minutes, seconds  in two digits
  const result = {
    days: days < 10 ? `0${days}` : days,
    hours: hours < 10 ? `0${hours}` : hours,
    minutes: minutes < 10 ? `0${minutes}` : minutes,
    seconds: seconds < 10 ? `0${seconds}` : seconds,
  };
  return result;
};

const TimerComp = ({ time, label }: any) => (
  <div className='flex flex-col items-center'>
    <div className='w-10 h-10 rounded flex items-center justify-center bg-grey-lightest-100'><span className='text-sm leading-6 text-black'>{time}</span></div>
    <div className='text-xs leading-4.5 text-grey-lightest-300'>{label}</div>
  </div>
);

const TimerSeperator = () => (
  <span className="leading-6 text-sm px-2 mt-2">:</span>
);

const TimerCountDown = (props: Props) => {
  const [timeDetails, setTimeDetails] = React.useState(getTimeInfo(props.countdown || Date.now()));

  // using set interval updates the state every second
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeDetails(getTimeInfo(props.countdown || Date.now()));
    }, 1000);
    return () => clearInterval(interval);
  }, [props.countdown]);

  return (
    <div className={`flex ${props?.className || ''}`}>
      <TimerComp time={timeDetails.days} label='Day' />
      <TimerSeperator />
      <TimerComp time={timeDetails.hours} label='Hour' />
      <TimerSeperator />
      <TimerComp time={timeDetails.minutes} label='Min' />
      <TimerSeperator />
      <TimerComp time={timeDetails.seconds} label='Sec' />
    </div>
  );
};

export default TimerCountDown;
