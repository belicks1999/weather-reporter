import { body, validationResult } from 'express-validator';

export const validateUser = [
    body('email').isEmail(),
    body('location').notEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
