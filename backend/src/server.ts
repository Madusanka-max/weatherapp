import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Weather API endpoint
app.get('/api/weather', async (req, res) => {
  try {
    const { city } = req.query;
    
    if (!city) {
      return res.status(400).json({ error: 'City parameter is required' });
    }

    const response = await axios.get(`${process.env.WEATHER_API_BASE_URL}/current.json`, {
      params: {
        key: process.env.WEATHER_API_KEY,
        q: city,
        aqi: 'no'
      }
    });

    const weatherData = {
      city: response.data.location.name,
      temperature: response.data.current.temp_c,
      condition: response.data.current.condition.text,
      humidity: response.data.current.humidity,
      windSpeed: response.data.current.wind_kph,
      icon: response.data.current.condition.icon
    };

    res.json(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      res.status(404).json({ error: 'City not found' });
    } else {
      res.status(500).json({ error: 'Failed to fetch weather data' });
    }
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 