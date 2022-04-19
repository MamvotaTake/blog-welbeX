import express, { Response, Request } from 'express';
import jwt from 'jsonwebtoken';
import { body } from 'express-validator';
import { validateRequest, BadRequestError } from '@takesure/common';

const router = express.Router();

router.get('/api/users/signup', validateRequest, async (req: Request, res: Response) => {
    res.send('Hello World!');
})

export { router as signupRouter }