import { calculateBmi } from "./bmiCalculator";
import express from "express";

const app = express();

app.get("/hello", (_req, res) => {
	res.send("Hello fullstack");
});

app.get("/bmi", (req, res) => {
	if (!req.query || !req.query.height || !req.query.weight || isNaN(Number(req.query.height)) || isNaN(Number(req.query.weight))) {
		res.status(404).send({ error: "malformatted parameters" });
	} else {
		let h = req.query.height as string;
		let w = req.query.weight as string;
		const result = {
			height: h,
			width: w,
			bmi: calculateBmi(parseFloat(h), parseFloat(w)),
		};
		res.send(result);
	}
});

const PORT = 3003;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
