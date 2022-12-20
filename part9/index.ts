import { calculateBmi } from './bmiCalculator';
import express from 'express';

import { calculateExercises } from './exerciseCalculatorFunction';
import { calculator } from './calculatorFn';

const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
    res.send('Hello fullstack');
});

app.get('/bmi', (req, res) => {
    if (
        !req.query ||
        !req.query.height ||
        !req.query.weight ||
        isNaN(Number(req.query.height)) ||
        isNaN(Number(req.query.weight))
    ) {
        res.status(404).send({ error: 'malformatted parameters' });
    } else {
        const h = req.query.height as string;
        const w = req.query.weight as string;
        const result = {
            height: h,
            width: w,
            bmi: calculateBmi(parseFloat(h), parseFloat(w)),
        };
        res.send(result);
    }
});

// EXAMPLE request body:
// {
//     "daily_exercises": [1, 0, 2, 0, 3, 0, 2.5],
//     "target": 2.5
// }

app.post('/exercises', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { body } = req;
    const missingParameters =
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        !body?.daily_exercises || !body?.target;
    if (missingParameters) {
        return res.status(400).send({ error: 'parameters missing' });
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { daily_exercises, target } = body;

    const isMalformatted =
        !Array.isArray(daily_exercises) ||
        daily_exercises.some((i) => isNaN(Number(i))) ||
        isNaN(Number(target));

    if (isMalformatted) {
        return res.status(400).send({ error: 'malformatted parameters' });
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const result = calculateExercises(daily_exercises, target);
    return res.send(result);
});

app.post('/calculate', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { value1, value2, op } = req.body;
    if (!value1 || isNaN(Number(value1))) {
        return res.status(400).send({ error: '...' });
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const result = calculator(value1, value2, op);
    return res.send(result);
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
