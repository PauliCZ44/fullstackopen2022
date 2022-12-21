import express from 'express';
import diagnosesRouter from './routes/diagnosesRoutes';
// import patientsRouter from './routes/patientsRoutes';
import cors from 'cors';

const app = express();
app.use(express.json(), cors());

const PORT = 3001;

app.use('/api/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.use('/api/diagnoses', diagnosesRouter);

// app.use('/api/patients', patientsRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
