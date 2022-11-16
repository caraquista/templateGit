let numbers = [];
let operators = [];

function plus() {
    // USUARIO 1
     const number = document.getElementById('result')
    // USUARIO 2
    numbers.push(+number.value);
    // USUARIO 3
    number.value = '';
    // USUARIO 4
    // operators.push('+');
};
// USUARIO 1
    // 
function minus() {
    // USUARIO 1
    const number = document.getElementById('result')
    // USUARIO 2
    numbers.push(+number.value);
    // USUARIO 3
    number.value = '';
    // USUARIO 4
    // operators.push('-');
};

function divide() {
    // USUARIO 1
     const number = document.getElementById('result')
    // USUARIO 2
    numbers.push(+number.value);
    // USUARIO 3
    number.value = '';
    // USUARIO 4
    // operators.push('/');
};

function multiply() {
    // USUARIO 1
     const number = document.getElementById('result')
    // USUARIO 2
    numbers.push(+number.value);
    // USUARIO 3
    number.value = '';
    // USUARIO 4
    // operators.push('*');
};

function clean() {
    // USUARIO 1
     const number = document.getElementById('result')
    // USUARIO 2
    const value = number.value;
    // USUARIO 3
    const result = value.slice(0, -1);
    // USUARIO 4
    // number.value = result;
}

function clean() {
    // USUARIO 1
     const number = document.getElementById('result')
    // USUARIO 2
    number.value = number.value.slice(0, -1);
    // USUARIO 3
    numbers = [];
    // USUARIO 4
    // operators = [];
}

function result() {
    // USUARIO 1
    const number = document.getElementById('result')
     numbers.push(+number.value);
    // USUARIO 2
    console.log(number.value, numbers, operators);
    // USUARIO 3
    let result = 0;
    for (let i = 0; i < numbers.length -1 ; i++) {
        console.log(((result <= 0) ? numbers[i] : result) +operators[i]+numbers[i+1]);
        result += eval(((result <= 0) ? numbers[i] : result) +operators[i]+numbers[i+1]);
    }
    // USUARIO 4
    // operators = [];
    // numbers = [];
    // number.value = result;
}