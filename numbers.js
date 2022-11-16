function clickNumber (number) {
    // USUARIO 1
     console.log('Hola', number);
    // USUARIO 2
    const value = document.getElementById('result')
    // USUARIO 3
    console.log('value', value);
    // USUARIO 4
    value.value = value.value +''+ number; 
};