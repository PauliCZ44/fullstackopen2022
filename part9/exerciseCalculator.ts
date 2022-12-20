import { calculateExercises } from './exerciseCalculatorFunction';

export interface ICalculateExecrisesResults {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

if (process.argv.length <= 3) {
    throw new Error('ERROR: You must enter at least one day of training!');
}

const inputs = process.argv.slice(2, process.argv.length).map((i) => {
    if (!isNaN(Number(i))) {
        return parseFloat(i);
    } else {
        throw new Error(
            "Provided values were not numbers! Your input was: '" + i + "' \n"
        );
    }
});

const target = inputs.shift();

console.log(calculateExercises(inputs, Number(target)));
