import express from 'express';
import { createUser, updateLocation } from '../controllers/userController.js';
import { getWeatherData } from '../controllers/weatherController.js';
import { validateUser } from '../middleware/validation.js';
import  auth  from '../middleware/auth.js';

const router = express.Router();

router.post('/users', validateUser, createUser);
router.patch('/users/location', auth, updateLocation);
router.get('/weather/:date', auth, getWeatherData);

export default router;
