// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
    return function (number) {
        return number * number;
    }
}

function fareDoubler(number) {
    const numberMulti= 2 * number;
    return numberMulti;
}

function fareTripler(number) {
    const numberTriple = 3 * number;
    return numberTriple;
}

function selectDifferentDrivers(arrayOfDrivers, driverSeclection) {
    if (driverSeclection === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers);
    } 
    else {
        return returnLastTwoDrivers(arrayOfDrivers);   
    }
}
