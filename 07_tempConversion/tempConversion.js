const convertToCelsius = function (temp) {
  const cTemp = (5 / 9) * (temp - 32);
  return parseFloat(cTemp.toFixed(1));
};

const convertToFahrenheit = function (temp) {
  const fTemp = (9 / 5) * temp + 32;
  return parseFloat(fTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
