import "./App.css";
import React, { useState, useEffect } from "react";
import Countdown from "./components/utils/Countdown";

function App() {
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
    <div className="App">
      Welcome to the Holy Frijole Chili Cook Off!
      <Countdown
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
    </div>
  );
}

export default App;
