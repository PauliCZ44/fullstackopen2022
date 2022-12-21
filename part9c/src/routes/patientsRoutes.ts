import express from 'express';
import patientService from '../services/patientService';

const router = express.Router();

//This will be the basic route for the diagnoses
// http://localhost:3000/api/patients/

router.get('/', (_req, res) => {
    res.send(patientService.getPatientsNoSsn());
});

export default router;
