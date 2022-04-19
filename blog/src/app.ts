import express from 'express';
import { signupRouter } from './api/routes/signup';
import { signinRouter } from './api/routes/signin';
import { NotFoundError, errorHandler } from '@takesure/common';

const app = express();
app.set('trust proxy', true);
app.use(express.json());

app.use(signupRouter)
app.use(signinRouter)

// Error handler middleware
app.all('*', async (req, res, next) => {
    next(new NotFoundError());
})

app.use(errorHandler)

export { app };