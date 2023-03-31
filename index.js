// code your solution here

function saturdayFun(activity = `roller-skate`) {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(doWork = `go to the office`) {
    return `This Monday, I will ${doWork}.`
}

function wrapAdjective(wrapping = '*') {
    return function(value = "special") {
        return `You are ${wrapping}${value}${wrapping}!`
    }
}