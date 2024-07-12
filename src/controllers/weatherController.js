import Weather from '../models/weather.js';


export const getWeatherData = async (req,res) =>{
    try {

        const {date}=req.params;
        const weatherdata = await Weather.find({
            date: new Date(date)
        });

        if(!weatherdata){
            return res.status(404).send();
        }

        res.send(weatherdata);
        
    } catch (error) {

        res.status(500).send(error);
        
    }
};