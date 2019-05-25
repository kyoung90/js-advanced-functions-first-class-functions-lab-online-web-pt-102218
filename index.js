// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers = function(drivers){
    return [drivers[drivers.length-2], drivers[drivers.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number){
    return function(number){
        return number * number
    }
}

function fareDoubler(number){
    return number * 2
}

function fareTripler(number){
    return number * 3
}

function fetchSpecifiedDrivers(drivers, func){
    return func(drivers)
}