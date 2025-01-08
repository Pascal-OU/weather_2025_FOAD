import React,{useEffect, useState} from 'react'
import axios from 'axios';

function Horoscope() {
  const [dailyHoroscope, setDailyHoroscope] = useState(null);
  const [weeklyHoroscope, setWeeklyHoroscope] = useState(null);
  const [loadingDaily, setLoadingDaily] = useState(true);
  const [loadingWeekly, setLoadingWeekly] = useState(false);
  const [error, setError] = useState(null);

  // Déclarez fetchDailyHoroscope avant le useEffect
  const fetchDailyHoroscope = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/horoscope');
      setDailyHoroscope(response.data);
    } catch (error) {
      console.error('Error fetching daily horoscope:', error.message);
      setError('Failed to fetch daily horoscope.');
    } finally {
      setLoadingDaily(false);
    }
  };

  // Déclarez fetchWeeklyHoroscope pour charger l'horoscope hebdomadaire
  const fetchWeeklyHoroscope = async () => {
    setLoadingWeekly(true);
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/horoscope-weekly');
      setWeeklyHoroscope(response.data);
    } catch (error) {
      console.error('Error fetching weekly horoscope:', error.message);
      setError('Failed to fetch weekly horoscope.');
    } finally {
      setLoadingWeekly(false);
    }
  };

  useEffect(() => {
    fetchDailyHoroscope();
  }, []);
    
  return (
    <div>
      <h2>L'Horoscope du jour :</h2>
      {loadingDaily ? (
        <div>Afficher ici l'horoscope du jour</div>
      ) : error ? (
        <div style={{ color: 'red' }}>{error}</div>
      ) : dailyHoroscope ? (
        <div>
          {Object.keys(dailyHoroscope).map((sign) => (
            <div key={sign} style={{ marginBottom: '20px' }}>
              <h3>{sign}</h3>
              <p>{dailyHoroscope[sign]}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Impossible de charger l'horoscope</div>
      )}

      <h2>L'Horoscope hebdomadaire :</h2>
      {loadingWeekly ? (
        <div>Afficher ici l'horoscope hebdomadaire</div>
      ) : error ? (
        <div style={{ color: 'red' }}>{error}</div>
      ) : weeklyHoroscope ? (
        <div>
          {Object.keys(weeklyHoroscope).map((sign) => (
            <div key={sign} style={{ marginBottom: '20px' }}>
              <h3>{sign}</h3>
              <p>{weeklyHoroscope[sign]}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Impossible de charger l'horoscope</div>
      )}

    </div>
  )
}

export default Horoscope
