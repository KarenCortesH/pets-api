import "reflect-metadata"
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import petRoutes from './routes/pet.routes';

const app = express()
app.use(morgan('dev'));
app.use(cors())
//Utiliza el metodo JSON
app.use(express.json());
//Aqui lo estoy llamando
app.use(userRoutes);
app.use(petRoutes);

export default app;