//cambios
function calculate() {

    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    let result = Number(num1) + Number(num2);

    document.getElementById('result').innerText = "Result: " + result;
}

function resetFields(){
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');

    num1.value = '';
    num2.value = '';

    document.getElementById('operator').value = '+';
    document.getElementById('result').innerText = "Result: ";
}

function subtraction(){
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    let result = Number(num1) - Number(num2);

    document.getElementById('result').innerText = "Result: " + result;
}
