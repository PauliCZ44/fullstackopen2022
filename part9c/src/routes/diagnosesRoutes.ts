import express from 'express';
import diagnosesData from '../data/diagnosesData';

const router = express.Router();

//This will be the basic route for the diagnoses
// http://localhost:3000/api/diagnoses/

router.get('/', (_req, res) => {
    const diagnoses = diagnosesData;
    res.send(diagnoses);
});

export default router;
