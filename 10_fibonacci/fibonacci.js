
const fibonacci = function(number) {

    if (number < 0) {
        return "OOPS";
    } else if (number === 1) {
        return 0;
    } else {
        let prevprev = 0;
        let prev = 1;

        for (let i = 2; i <= number; i++) {
            let curr = prev + prevprev;
            prevprev = prev;
            prev = curr;
        }
        return prev;
    }

};

// Do not edit below this line
module.exports = fibonacci;
