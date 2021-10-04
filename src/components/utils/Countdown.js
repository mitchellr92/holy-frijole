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
      <section className="countdown-container flex-direction-row">
        <section className="countdown">
          <div className="timer">
            <section>
              <p>{timerDays}</p>
              <small>Days</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <small>Hours</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <small>Minutes</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <small>Seconds</small>
            </section>
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
