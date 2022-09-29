
let firstNumberBlock
let signBlock
let secondNumberBlock
let valueBlock

function preparation() {
    firstNumberBlock = document.getElementById('firstNumber');
    signBlock = document.getElementById('signS');
    secondNumberBlock = document.getElementById('secondNumber');
    valueBlock = document.getElementById('value');
}

function clickNumber(number) {
    if (signBlock.innerHTML == '') {
        firstNumberBlock.innerHTML += number;
    } else {
        secondNumberBlock.innerHTML += number;
    }

}

function clickSign(sign) {
    if (signBlock.innerHTML !== '' && secondNumberBlock.innerHTML !== ''){
        alert('no');
    } else {
        signBlock.innerHTML = sign ;
    }
}

function oppositeSign() {
    if (signBlock.innerHTML == '') {
        if (firstNumberBlock.innerHTML > 0) {
            firstNumberBlock.innerHTML = -Math.abs(firstNumberBlock.innerHTML);
        } else {
            firstNumberBlock.innerHTML = Math.abs(firstNumberBlock.innerHTML);
        }
    } else if (secondNumberBlock.innerHTML > 0) {
            secondNumberBlock.innerHTML = -Math.abs(secondNumberBlock.innerHTML);
        } else {
            secondNumberBlock.innerHTML = Math.abs(secondNumberBlock.innerHTML);
        }
}

function dot() {
    if (signBlock.innerHTML == '') {
        if (firstNumberBlock.innerHTML.includes('.')) {
            return
        } else {
            firstNumberBlock.innerHTML += '.';
        }
    } else if (secondNumberBlock.innerHTML.includes('.')) {
            return
    } else {
        secondNumberBlock.innerHTML += '.';
    }
}

function clearBlocks() {
    firstNumberBlock.innerHTML = '';
    signBlock.innerHTML = '';
    secondNumberBlock.innerHTML = '';
    valueBlock.innerHTML = '';
}

function percentage() {
    if (signBlock.innerHTML == '') {
        firstNumberBlock.innerHTML *= 0.01;
    } else {
        secondNumberBlock.innerHTML *= 0.01;
    }

}

function outcome() {
    let result;

    switch (signBlock.innerHTML) {
        case '/': 
            result = firstNumberBlock.innerHTML / secondNumberBlock.innerHTML;
            valueBlock.innerHTML = result.toFixed(2);
            break;

        case '*':
            result = firstNumberBlock.innerHTML * secondNumberBlock.innerHTML;
            valueBlock.innerHTML = result.toFixed(2);
            break;

        case '+':
            result = parseInt(firstNumberBlock.innerHTML) + parseInt(secondNumberBlock.innerHTML);
            valueBlock.innerHTML = result.toFixed(2);
            break;

        case '-':
            result = firstNumberBlock.innerHTML - secondNumberBlock.innerHTML;
            valueBlock.innerHTML = result.toFixed(2);
            break;
    }   
}

