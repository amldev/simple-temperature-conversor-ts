var sTempConverter = require('simple-temperature-conversor');

// Añadidos + conversiones. Referencia = https://es.wikipedia.org/wiki/Temperatura


/**
 * ºC = (Ra) * (5 / 9 )
 * @param temperature {number} temperature in Rankine to Celsius
 */
export function rankineToKelvin(temperature: number): number {
    // Ra * 5 / 9
    return (simpleTemperatureConverter.checkIsANumber(temperature)) ? temperature * ( 5 / 9 ): simpleTemperatureConverter.errorMessageIsNotANumber();
}

/**
 * ºC = (Ra - 461.67 ) * (5 / 9 )
 * @param temperature {number} temperature in Rankine to Celsius
 */
export function rankineToCelsius(temperature:number): number {
    return (simpleTemperatureConverter.checkIsANumber(temperature)) ? (temperature -491.67)* ( 5 / 9 ): simpleTemperatureConverter.errorMessageIsNotANumber();
}

/**
 * 0 °C × 9 / 5 + 491,67 = 491,67 °R
 * @param temperature 
 */
export function celsiusToRankine(temperature: number): number {
    return (simpleTemperatureConverter.checkIsANumber(temperature)) ? (temperature ) * ( 9 / 5) + 491.67: simpleTemperatureConverter.errorMessageIsNotANumber();
}

/**
 * Take all functions to use in simple-temperature-conversor library.
 * [Library Home Page]{@link https://www.npmjs.com/package/simple-temperature-conversor}
 */
export const simpleTemperatureConverter = sTempConverter;