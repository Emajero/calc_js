// program a simple calculator

// take the operator
var operator = prompt('Enter operator (either +, -, * or /): ');

// take the operand input
var num1 = parseFloat(prompt('Enter first number: '));
var num2 = parseFloat(prompt('Enter second number: '));

let result = 0;

// using if...else if...else
if (isNaN(num1) || isNaN(num2)){
    alert('Wrong Input! Please provide data');
}else{
    if (operator == '+'){
        result = num1 + num2
    }
    else if(operator == '-'){
        result = num1 - num2
    }
    else if(operator == '*'){
        result = num1 * num2
    }
    else (operator == '/');{
        result = num1 / num2
    }
    alert(num1 + operator + num2 + ' = ' + result)
}
