let numbers = [];
let operators = [];

function plus() {
    const number = document.getElementById('result')
    numbers.push(+number.value);
    number.value = '';
    operators.push('+');
};

function minus() {
    const number = document.getElementById('result')
    numbers.push(+number.value);
    number.value = '';
    operators.push('-');
};

function divide() {
    const number = document.getElementById('result')
    numbers.push(+number.value);
    number.value = '';
    operators.push('/');
};

function multiply() {
    const number = document.getElementById('result')
    numbers.push(+number.value);
    number.value = '';
    operators.push('*');
};

function clean() {
    const number = document.getElementById('result')
    number.value = number.value.slice(0, -1);
}

function clean() {
    const number = document.getElementById('result')
    number.value = number.value.slice(0, -1);
    numbers = [];
    operators = [];
}

function result() {
    const number = document.getElementById('result')
    numbers.push(+number.value);
    console.log(number.value, numbers, operators);
    let result = 0;
    for (let i = 0; i < numbers.length -1 ; i++) {
        console.log(((result <= 0) ? numbers[i] : result) +operators[i]+numbers[i+1]);
        result += eval(((result <= 0) ? numbers[i] : result) +operators[i]+numbers[i+1]);
    }
    operators = [];
    numbers = [];
    number.value = result;
}