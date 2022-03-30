interface ICalculateExecrisesResults {
	periodLength: number;
	trainingDays: number;
	success: boolean;
	rating: number;
	ratingDescription: string;
	target: number;
	average: number;
}

if (process.argv.length <= 3) {
	throw new Error("ERROR: You must enter at least one day of training!");
}

const inputs = process.argv.slice(2, process.argv.length).map((i) => {
	if (!isNaN(Number(i))) {
		return parseFloat(i);
	} else {
		throw new Error("Provided values were not numbers! Your input was: '" + i + "' \n");
	}
});

const target = inputs.shift();

function calculateExercises(daysArray: number[], target: number): ICalculateExecrisesResults {
	let average = daysArray.reduce((a, b) => a + b, 0) / daysArray.length;
	let rating: number;
	let ratingDescription: string;
	if (average > 2) {
		rating = 3;
		ratingDescription = "You did a really good job!";
	} else if (average > 1) {
		rating = 2;
		ratingDescription = "You did okay!";
	} else {
		ratingDescription = "You did not do well!";
		rating = 1;
	}
	let results = {
		periodLength: daysArray.length,
		trainingDays: daysArray.filter((i) => i != 0).length,
		success: average > target,
		rating,
		ratingDescription,
		target: target,
		average: average,
	};
	return results;
}

console.log(calculateExercises(inputs, target));
