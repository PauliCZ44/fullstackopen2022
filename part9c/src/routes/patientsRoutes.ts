import express from 'express';

const router = express.Router();

//This will be the basic route for the diagnoses
// http://localhost:3000/api/patients/

router.get('/', (_req, res) => {
    res.send('Fetching all patients!');
});

export default router;
