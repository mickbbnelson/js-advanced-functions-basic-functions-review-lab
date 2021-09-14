// Your code here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
} 

const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string="*") {
    return function(string1="special") {
        return `You are ${string}${string1}${string}!`
    }

}

const Calculator = new Object();

Calculator.add = function(a,b) {
    return a + b;
}

Calculator.subtract = function(a,b) {
    return a - b;
}

Calculator.multiply = function(a,b) {
    return a * b;
}

Calculator.divide = function(a,b) {
    return a / b;
}

function actionApplyer(int, array) {
    for (let i = 0; i < array.length; i++) {
        int = array[i](int)
    }
    return int
}