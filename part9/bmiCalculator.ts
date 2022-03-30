function calculateBmi(height_cm: number, weight_kg: number): string {
	const bmi: number = weight_kg / ((height_cm / 100) * (height_cm / 100));
	console.log(bmi);
	if (bmi < 18.5) {
		return "Underweight";
	} else if (bmi < 25) {
		return "Normal (healthy weight)";
	} else if (bmi < 30) {
		return "Overweight";
	} else {
		return "Obese";
	}
}

if (process.argv.length > 4) {
	throw new Error("Parameter error! You must include exactly 2 parameters.");
} else {
	const [height_cm, weight_kg] = process.argv.slice(2, process.argv.length).map((i) => {
		if (!isNaN(Number(i))) {
			return parseFloat(i);
		} else {
			throw new Error("Provided values were not numbers! Your input was: '" + i + "' \n");
		}
	});
	console.log(calculateBmi(height_cm, weight_kg));
}
