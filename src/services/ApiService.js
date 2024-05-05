// src/services/nasaService.js
import axios from 'axios';

const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY; // Make sure to prefix with REACT_APP_

// Astronomy Picture of the Day API call
export const fetchAPOD = async (date) => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}${date ? `&date=${date}` : ''}`;
  const response = await axios.get(url);
  return response.data;
};

// NASA Images API call
export const fetchNasaImages = async (query) => {
  const url = `https://images-api.nasa.gov/search?q=${encodeURIComponent(query)}`;
  const response = await axios.get(url);
  return response.data.collection.items;
};

// Mars Rover Images API call
export const fetchMarsPhotos = async (sol, camera) => {
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&api_key=${NASA_API_KEY}`;
  const response = await axios.get(url);
  return response.data.photos;
};
