import jwt from 'jsonwebtoken';
import { validateRequest, BadRequestError } from '@takesure/common';
import express, { Request, Response } from 'express';
import { body } from 'express-validator';

const router = express.Router();

router.get('/api/users/signin', validateRequest, async(req:Request, res:Response)=>{
    res.send('User successfully signed in')
})



export {router as signinRouter}