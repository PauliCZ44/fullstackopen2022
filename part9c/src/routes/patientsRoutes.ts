import express from 'express';
import patientService from '../services/patientService';

const router = express.Router();

//This will be the basic route for the diagnoses
// http://localhost:3000/api/patients/

router.get('/', (_req, res) => {
    res.send(patientService.getPatientsNoSsn());
});

router.post('/', (req, res) => {
    try {
        // const newPatient = toNewPatient(req.body);

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const addedEntry = patientService.addPatient(req.body);
        res.json(addedEntry);
        res.send(addedEntry);
    } catch (error: unknown) {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    }
});

export default router;
