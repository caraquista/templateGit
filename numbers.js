function clickNumber (number) {
    console.log('Hola', number);
    const value = document.getElementById('result')
    console.log('value', value);
    value.value = value.value +''+ number; 
};