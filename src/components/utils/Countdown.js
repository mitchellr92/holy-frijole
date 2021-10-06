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

  const countdown = "d-flex flex-column align-items-center w-25";

  useEffect(() => {
    startTimer();
  });
  return (
    <Fragment>
      <section className="countdown-container">
        <section className="countdown">
          <div className="timer d-flex justify-content-center align-items-center w-50 m-auto">
            <section className={countdown}>
              <h4>{timerDays}</h4>
              <h5>Days</h5>
            </section>
            <h3>:</h3>
            <section className={countdown}>
              <h4>{timerHours}</h4>
              <h5>Hours</h5>
            </section>
            <h3>:</h3>
            <section className={countdown}>
              <h4>{timerMinutes}</h4>
              <h5>Minutes</h5>
            </section>
            <h3>:</h3>
            <section className={countdown}>
              <h4>{timerSeconds}</h4>
              <h5>Seconds</h5>
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
