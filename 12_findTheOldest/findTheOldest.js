
const findTheOldest = function(arr) {

    return arr.reduce((oldest, current) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

        if (oldestAge < currentAge) {
            return current;
        } else {
            return oldest;
        }
        
    });

};

const getAge = function(birth, death) {

    if(!death) {
        death = new Date().getFullYear();
    }
    return (death - birth);

};

// Do not edit below this line
module.exports = findTheOldest;
