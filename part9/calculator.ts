import { calculator } from './calculatorFn';

try {
    console.log(calculator(1, 0, 'divide'));
} catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
}
