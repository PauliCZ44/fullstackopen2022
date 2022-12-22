import patiensData from '../data/patientsData';
import { NewPatient, PatientNoSsn } from '../types';
import { v1 as uuid } from 'uuid';

const getPatientsNoSsn = () => {
    const patientsNoSsn: PatientNoSsn[] = patiensData.map((p) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { ssn: _, ...newPatient } = p;
        return newPatient;
    });
    return patientsNoSsn;
};

const addPatient = (patientData: NewPatient) => {
    const newPatient = {
        ...patientData,
        id: uuid(),
    };
    patiensData.push(newPatient);
    return newPatient;
};

export default {
    getPatientsNoSsn,
    addPatient,
};
