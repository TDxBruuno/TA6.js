function convertToCelsius(temp) {
  let celsius = (temp - 32) * 5 / 9;
    const result = celsius.toFixed(1);
    console.log(result);
}

function convertToFahrenheit(temp) {
  let fahrenheit = temp * 9 / 5 + 32;
    const result = fahrenheit.toFixed(1);
    console.log(result);
}

convertToCelsius(100);
convertToFahrenheit(0);