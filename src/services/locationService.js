import axios from 'axios';

export const getCityName = async (lat, lon) => {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${process.env.GOOGLE_API_KEY}`);
    const addressComponents = response.data.results[0].address_components;
    const city = addressComponents.find(component => component.types.includes("locality")).long_name;
    return city;
};
