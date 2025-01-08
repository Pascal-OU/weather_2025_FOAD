
import { useState } from 'react';
import './App.css';
import Meteo from './components/Meteo/Meteo';
import Horoscope from './components/Horoscope/Horoscope';

const App = () => {
  const [displayMeteo, setDisplayMeteo] = useState(false);
  const [displayDailyHoroscope, setDisplayDailyHoroscope] = useState(false);
  const [displayWeeklyHoroscope, setDisplayWeeklyHoroscope] = useState(false);

  const toggleMeteo = () => {
    setDisplayMeteo(!displayMeteo);
  }
  const toggleDailyHoroscope = () => {
    setDisplayDailyHoroscope(!displayDailyHoroscope);
  }
  const toggleWeeklyHoroscope = () => {
    setDisplayWeeklyHoroscope(!displayWeeklyHoroscope);
  }

  return (
    <div className="App">
      <div><button onClick={toggleMeteo}>Meteo du jour</button></div>
      {displayMeteo ? <Meteo></Meteo> : ""}
      <div><button onClick={toggleDailyHoroscope}>Horoscope du jour</button></div>
      {displayDailyHoroscope && <Horoscope type="daily" />}
      <div><button onClick={toggleWeeklyHoroscope}>Horoscope hebdomadaire</button></div>
      {displayWeeklyHoroscope && <Horoscope type="weekly" />}
    </div>
  );
}

export default App;
