# Weather Dashboard Application

A full-stack weather dashboard application built with Angular and Node.js.

## Project Structure
```
weather-dashboard/
├── backend/           # Node.js + Express backend
└── frontend/         # Angular frontend
```

## Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following content:
   ```
   PORT=3000
   WEATHER_API_KEY=your_weather_api_key_here
   WEATHER_API_BASE_URL=https://api.weatherapi.com/v1
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The backend will run on http://localhost:3000

## Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```

The frontend will run on http://localhost:4200

## Features

- Search for weather by city name
- Display current weather conditions
- Show temperature, humidity, and wind speed
- Responsive design
- Error handling for invalid cities
- Loading indicators

## Technologies Used

- Frontend:
  - Angular
  - TypeScript
  - Angular Material
  - RxJS

- Backend:
  - Node.js
  - Express
  - TypeScript
  - Axios
  - WeatherAPI.com

## API Documentation

### Weather Endpoint

- GET `/api/weather?city=CityName`
- Returns current weather data for the specified city
- Response includes:
  - City name
  - Temperature
  - Weather condition
  - Humidity
  - Wind speed
  - Weather icon 