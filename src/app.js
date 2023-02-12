//Aqui vai iniciar o projeto

// Deve ser usar os padrões de CONTROLLERS, ROUTERS, middlewares,schemas


import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT;  

app.listen(port, ()=> console.log('Server running in port: ${port}'));