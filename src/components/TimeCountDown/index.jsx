import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

TimeCountDown.propTypes = {
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  width: PropTypes.string,
};

export default function TimeCountDown(props) {
  const [hours, setHours] = useState(props.hours);
  const [minutes, setMinutes] = useState(props.minutes);
  const [seconds, setSeconds] = useState(props.seconds);

  function convertTime(time) {
    if (time.toString().length === 1) {
      return `0${time}`;
    } else {
      return time.toString();
    }
  }

  useEffect(() => {
    let timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          setHours(hours - 1);
          setMinutes(59);
          setSeconds(59);
          return;
        }
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);
    if (hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [hours, minutes, seconds]);
  return (
    <div className="time-count-down" style={{width: props.width}} >
      <div className="time-count-down__item">
        <span>{convertTime(hours)}</span>
      </div>
      <div className="time-count-down__item">
        <span>{convertTime(minutes)}</span>
      </div>
      <div className="time-count-down__item">
        <span>{convertTime(seconds)}</span>
      </div>
    </div>
  );
}
