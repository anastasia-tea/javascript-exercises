
const convertToCelsius = function(f) {

  let c = (f - 32) * (5 / 9);

  let roundC = Math.round(c * 10) / 10;

  return roundC;


};

const convertToFahrenheit = function(c) {

  let f = (c * (9 / 5) + 32);

  let roundF = Math.round(f * 10) / 10;

  return roundF;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
