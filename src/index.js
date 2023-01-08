module.exports = function toReadable(number) {
    let a = number;
    let str = String(number);
    let favescore = "hundred";
    let simpleNumber = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
    };
    let directNumber = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "one hundred",
    };

    let tenNumber = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    if (number <= 10) {
        // console.log(b[a]);
        return simpleNumber[a];
    }

    if (
        (number >= 10 && number <= 20) ||
        number == 30 ||
        number == 40 ||
        number == 50 ||
        number == 60 ||
        number == 70 ||
        number == 80 ||
        number == 90 ||
        number == 100
    ) {
        return directNumber[a];
    }

    if (str.length === 2) {
        console.log(tenNumber[str[0]] + " " + simpleNumber[str[1]]);
        return tenNumber[str[0]] + " " + simpleNumber[str[1]];
    }

    if (str[1] == 0 && str[2] == 0) {
        return simpleNumber[str[0]] + " " + favescore;
    }

    if (str[1] == 0) {
        return (
            simpleNumber[str[0]] + " " + favescore + " " + simpleNumber[str[2]]
        );
    }

    if (str[1] == 1) {
        return (
            simpleNumber[str[0]] +
            " " +
            favescore +
            " " +
            directNumber[str.slice(1)]
        );
    }

    if (str[1] >= 2 && str[2] == 0) {
        return simpleNumber[str[0]] + " " + favescore + " " + tenNumber[str[1]];
    }

    if (str[1] >= 2 && str[2] !== 0) {
        return (
            simpleNumber[str[0]] +
            " " +
            favescore +
            " " +
            tenNumber[str[1]] +
            " " +
            simpleNumber[str[2]]
        );
    }
};
