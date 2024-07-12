import axios from 'axios';

export const sendEmail = async (to, weatherReport) => {
    const emailData = {
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_USER_ID,
        template_params: {
            to_email: to,
            weather_report: weatherReport
        }
    };

    try {
        await axios.post('https://api.emailjs.com/api/v1.0/email/send', emailData);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};
