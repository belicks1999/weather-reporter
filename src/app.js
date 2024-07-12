import express from "express";
import bodyParser from 'body-parser';
import connectDB from './utils/db.js';
import routes from './routes/index.js';
import cron from 'node-cron';





const app = express();

connectDB();

app.use(bodyParser.json());
app.use('./api',routes);

cron.schedule('0 */3 * * *', () => {
    console.log('sending weather reports every 3 hours');
  });


  export default app;