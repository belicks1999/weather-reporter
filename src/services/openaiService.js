import axios from 'axios';

export const generateWeatherReport = async (weatherData) => {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: `Generate a weather report for the following data: ${JSON.stringify(weatherData)}`,
        max_tokens: 100
    }, {
        headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
    });
    return response.data.choices[0].text;
};
