import "./App.css";
import React, { useState, useEffect } from "react";
import Countdown from "./components/utils/Countdown";

function App() {
  const [timerDays, setTimerDays] = useState;
  const [timerHours, setTimerHours] = useState;
  const [timerMinutes, setTimerMinutes] = useState;
  const [timerSeconds, setTimerSeconds] = useState;

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
