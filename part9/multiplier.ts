const multiplicator = (arr: number[], printText: string) => {
    console.log(arr);
    const result = arr.reduce((a, b) => a * b, 1);
    console.log(printText, result);
};

const a = Number(process.argv[2]);
const b = Number(process.argv[3]);

// const nums = process.argv.slice(2, process.argv.length);

multiplicator(
    [a, b],
    `Multiplied ${process.argv
        .slice(2, process.argv.length)
        .join(', ')}, the result is:`
);
