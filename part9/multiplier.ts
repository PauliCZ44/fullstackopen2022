const multiplicator = (arr: number[], printText: string) => {
	console.log(arr);
	let result = arr.reduce((a, b) => a * b, 1);
	console.log(printText, result);
};

const a: number = Number(process.argv[2]);
const b: number = Number(process.argv[3]);

const nums = process.argv.slice(2, process.argv.length) as any[];

multiplicator(nums, `Multiplied ${process.argv.slice(2, process.argv.length).join(", ")}, the result is:`);
