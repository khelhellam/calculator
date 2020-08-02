const result = document.querySelector('#result');
let saved = '0';
let operator;


let keys=document.querySelectorAll('.number');

keys.forEach((key) => {
    key.addEventListener('click', () => {
        if(result.innerText === '0'){
            result.innerText = key.dataset.value;
        }
        else{
            result.innerText += key.dataset.value;
        }
    })
})

document.querySelector('.backspace').addEventListener('click', () => {
    result.innerText = '0';
    saved = '0';
})

document.querySelector('.add').addEventListener('click', () => {
    saved = add(saved,result.innerText);
    result.innerText = '0';
    operator = add;
})

document.querySelector('.substract').addEventListener('click', () => {
    saved = result.innerText;
    result.innerText = '0';
    operator = substract;
})


document.querySelector('.equal').addEventListener('click', () => {
    result.innerText = operator(saved,result.innerText).slice(0,13);
    saved = '0';
})

document.querySelector('.multiply').addEventListener('click', () => {
    saved = result.innerText;
    result.innerText = '0';
    operator = multiply;
})

document.querySelector('.divide').addEventListener('click', () => {
    saved = result.innerText;
    result.innerText = '0';
    operator = divide;
})









function add(x,y) {
    return (parseInt(x)+parseInt(y)).toString();
}

function substract(x,y) {
    return (parseInt(x)-parseInt(y)).toString();
}

function multiply(x,y) {
    return (parseInt(x)*parseInt(y)).toString();
}

function divide(x,y) {
    return (parseInt(x)/parseInt(y)).toString();
}

function operate(operator,x,y) {
    return operator(x,y);
}
