import { Gender, NewPatient } from './types';

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

function parseString(string: unknown, fieldName: string): string {
    if (!string || !isString(string)) {
        throw new Error(`Incorrect or missing ${fieldName}:  ${string}`);
    }
    return string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    Object.values(Gender).includes(param);

function parseGender(gender: unknown): Gender {
    console.log(gender);
    if (!gender || !isGender(gender)) {
        throw new Error(`Incorrect or missing gender: ${gender}`);
    }
    return gender;
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
        gender: parseGender(object.gender),
        occupation: parseString(object.occupation, 'occupation'),
    };
    return newPatient;
};
