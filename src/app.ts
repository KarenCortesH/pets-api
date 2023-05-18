import "reflect-metadata"
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/user.routes';

const app = express()
app.use(morgan('dev'));
app.use(cors())
//Aqui lo estoy llamando
app.use(userRoutes);

export default app;