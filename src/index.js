module.exports = function toReadable(number) {
    const main = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const second = [
        null,
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let numArray = number.toString().split("");

    if (number < 20) {
        return main[number];
    }
    if (number < 99 && number % 10 === 0) {
        return second[number / 10];
    }
    if (number <= 99) {
        return `${second[numArray[0]]} ${main[numArray[1]]}`;
    }
    if (number < 1000 && number % 100 === 0) {
        return `${main[number / 100]} hundred`;
    }
    if (number < 1000 && number % 10 === 0) {
        return `${main[Math.floor(number / 100)]} hundred ${
            second[numArray[1]]
        }`;
    }
    if (number < 1000 && (numArray[1] === "0" || numArray[1] === "1")) {
        let second = numArray[1] + numArray[2];
        return `${main[Math.floor(number / 100)]} hundred ${main[+second]}`;
    }
    if (number < 1000) {
        return `${main[Math.floor(number / 100)]} hundred ${
            second[numArray[1]]
        } ${main[numArray[2]]}`;
    }
};

console.log(toReadable(333));
