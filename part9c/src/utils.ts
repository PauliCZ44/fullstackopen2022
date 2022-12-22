import { NewPatient } from './types';

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

function parseString(string: unknown, fieldName: string): string {
    if (!string || !isString(string)) {
        throw new Error(`Incorrect or missing ${fieldName}:  ${string}`);
    }
    return string;
}

type Fields = {
    name: unknown;
    dateOfBirth: unknown;
    ssn: unknown;
    gender: unknown;
    occupation: unknown;
};

export const toNewPatient = (object: Fields): NewPatient => {
    const newPatient: NewPatient = {
        name: parseString(object.name, 'name'),
        dateOfBirth: parseString(object.dateOfBirth, 'dateOfBirth'),
        ssn: parseString(object.ssn, 'ssn'),
        gender: parseString(object.gender, 'gender'),
        occupation: parseString(object.occupation, 'occupation'),
    };
    return newPatient;
};
