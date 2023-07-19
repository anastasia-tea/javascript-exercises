
// Referenced https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger

const sumAll = function(int1, int2) {

    if (int1 < 0 || int2 < 0) {
        return "ERROR";
    }

    if (!Number.isInteger(int1) || !Number.isInteger(int2)) {
        return "ERROR";
    }

    let first = int1;
    let last = int2;

    let sum = 0;

    if (first > last) {

        let temp = first;
        first = last;
        last = temp;

    }

    for (let i = first; i <= last; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
