interface ICalculateExecrisesResults {
	periodLength: number;
	trainingDays: number;
	success: boolean;
	rating: number;
	ratingDescription: string;
	target: number;
	average: number;
}

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

console.log(calculateExercises([3, 0, 2, 4.5, 4, 3, 1], 2));

// { periodLength: 7,
//   trainingDays: 5,
//   success: false,
//   rating: 2,
//   ratingDescription: 'not too bad but could be better',
//   target: 2,
//   average: 1.9285714285714286 }
