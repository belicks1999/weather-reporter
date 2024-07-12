import axios from 'axios';
import User from '../models/user.js';
import Weather from '../models/weather.js';
import { generateWeatherReport } from './openaiService.js';
import { sendEmail } from '../utils/emailService.js';

const getWeatherData = async (location) => {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.WEATHER_API_KEY}`);
    return response.data;
};

export const sendWeatherReports = async () => {
    const users = await User.find();
    users.forEach(async (user) => {
        const weatherData = await getWeatherData(user.location);
        const weatherReport = await generateWeatherReport(weatherData);

        const weather = new Weather({
            userId: user._id,
            weatherData,
            weatherReport
        });
        await weather.save();

        // Send email with weather report
        await sendEmail(user.email, weatherReport);
    });
};
