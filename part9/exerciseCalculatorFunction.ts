import { ICalculateExecrisesResults } from './exerciseCalculator';

export function calculateExercises(
    daysArray: number[],
    target: number
): ICalculateExecrisesResults {
    const parsedTarget = Number(target);
    const average = daysArray.reduce((a, b) => a + b, 0) / daysArray.length;
    let rating: number;
    let ratingDescription: string;
    if (average > 2) {
        rating = 3;
        ratingDescription = 'You did a really good job!';
    } else if (average > 1) {
        rating = 2;
        ratingDescription = 'You did okay!';
    } else {
        ratingDescription = 'You did not do well!';
        rating = 1;
    }
    const results = {
        periodLength: daysArray.length,
        trainingDays: daysArray.filter((i) => i != 0).length,
        success: average > parsedTarget,
        rating,
        ratingDescription,
        target: parsedTarget,
        average,
    };
    return results;
}
