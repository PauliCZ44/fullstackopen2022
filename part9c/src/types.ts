export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';

export type Visibility = 'great' | 'good' | 'ok' | 'poor';

export interface DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment: string;
}

export interface Diagnosis {
    code: string;
    name: string;
    latin?: string;
}

export enum Gender {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other',
}

export interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: Gender;
    occupation: string;
}

export type NewPatient = Omit<Patient, 'id'>;

// Doesns't work
// export interface PatientNoSsn extends Omit<Patient, 'ssn'> {}
export type PatientNoSsn = Omit<Patient, 'ssn'>;
