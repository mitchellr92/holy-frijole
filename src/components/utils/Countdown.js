import React, { Fragment, useState, useEffect } from "react";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("October 1, 2022").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const day = Math.floor(distance / 1000 / 60 / 60 / 24);
      const hour = Math.floor(distance / 1000 / 60 / 60) % 24;
      const minute = Math.floor(distance / 1000 / 60) % 60;
      const second = Math.floor(distance / 1000) % 60;

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(day);
        setTimerHours(hour);
        setTimerMinutes(minute);
        setTimerSeconds(second);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });
  return (
    <Fragment>
      <section className="countdown-container">
        <section className="countdown d-flex align-items-end text-dark fw-bold">
          <small className="me-2 mb-0">Eat some chili soon...</small>
          <div className="timer d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column align-items-center">
              <small className="mb-0">{timerDays}</small>
              <small className="mb-0">Days</small>
            </div>
            <h5 className="mx-2">:</h5>
            <div className="d-flex flex-column align-items-center">
              <small className="mb-0">{timerHours}</small>
              <small className="mb-0">Hours</small>
            </div>
            <h5 className="mx-2">:</h5>
            <div className="d-flex flex-column align-items-center">
              <small className="mb-0">{timerMinutes}</small>
              <small className="mb-0">Minutes</small>
            </div>
            <h5 className="mx-2">:</h5>
            <div className="d-flex flex-column align-items-center">
              <small className="mb-0">{timerSeconds}</small>
              <small className="mb-0">Seconds</small>
            </div>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

Countdown.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10
};

export default Countdown;
