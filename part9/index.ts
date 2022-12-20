import { calculateBmi } from './bmiCalculator';
import express from 'express';
import { calculator } from './calculator';

const app = express();

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
    console.log(`Server running on port ${PORT}`);
});
