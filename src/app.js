import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Hola desde la API de Publilujos 🚀'));

export { app };