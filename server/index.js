const express = require('express');
const cors = require('cors');
const fs = require('fs');
const axios = require('axios');


const app = express();
const port =  5000;


app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());


// Endpoint pour la météo
app.post('/api/weather', (req, res) => {
  try {
    console.dir(req.body);
    fetch(`http://www.7timer.info/bin/api.pl?lon=${req.body.lon}&lat=${req.body.lat}&product=astro&output=json`)
      .then(resp=>resp.json())
      .then(result=>{
        console.dir(result);
        res.send(result);
      })
  } catch (error) {
    console.dir(error)
  }

});


// Endpoint pour l'horoscope journalier
app.get('/api/horoscope', async (req, res) => {
  try {
    console.log('Received request for /api/horoscope');
    const response = await axios.get('https://kayoo123.github.io/astroo-api/jour.json'); // URL de l'API
    console.log('Response from external API:', response.data);
    res.send(response.data);
  } catch (error) {
    /* console.error('Error', error); */
    console.error('Error fetching horoscope:', error.message);
    console.error('Error details:', error.response?.data || error);
    res.status(500).send({ error: 'Failed to fetch horoscope' });
  }
});

// Endpoint pour l'horoscope Hebdomadaire
app.get('/api/horoscope-weekly', async (req, res) => {
  try {
    console.log('Fetching weekly horoscope from external API...');
    const response = await axios.get('https://kayoo123.github.io/astroo-api/hebdomadaire.json'); // Remplacez par l'URL de l'API hebdomadaire
    console.log('Response from external API (weekly):', response.data);
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching weekly horoscope:', error.message);
    res.status(500).send({ error: 'Failed to fetch weekly horoscope' });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));


