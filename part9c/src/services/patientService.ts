import patiensData from '../data/patientsData';
import { PatientNoSsn } from '../types';

const getPatientsNoSsn = () => {
    const patientsNoSsn: PatientNoSsn[] = patiensData.map((p) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { ssn: _, ...newPatient } = p;
        return newPatient;
    });
    return patientsNoSsn;
};

export default {
    getPatientsNoSsn,
};
