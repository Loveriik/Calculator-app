
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
    if (valueBlock.innerHTML !== '') {
        firstNumberBlock.innerHTML = number;
        signBlock.innerHTML = '';
        secondNumberBlock.innerHTML = '';
        valueBlock.innerHTML = '';
    } else if (signBlock.innerHTML == '') {
        if (firstNumberBlock.innerHTML.length === 1 && firstNumberBlock.innerHTML[0] == 0 ) {
          firstNumberBlock.innerHTML = number;
        } else {
          firstNumberBlock.innerHTML += number;
        }
      } else if (valueBlock.innerHTML !==''){
          return
      } else if (secondNumberBlock.innerHTML.length === 1 && secondNumberBlock.innerHTML[0] == 0 ) {
          secondNumberBlock.innerHTML = number;
      } else {
          secondNumberBlock.innerHTML += number;
      }
}

function clickSign(sign) {
    if (valueBlock.innerHTML !== '') {
        firstNumberBlock.innerHTML = valueBlock.innerHTML;
        signBlock.innerHTML = '';
        signBlock.innerHTML = sign;
        secondNumberBlock.innerHTML = '';
        valueBlock.innerHTML = '';
    } else if (signBlock.innerHTML !== '' && secondNumberBlock.innerHTML !== '') {
        return
    } else if (firstNumberBlock.innerHTML == '') {
        return
    }  else {
        signBlock.innerHTML = sign ;
    }
}

function oppositeSign() {
    if (valueBlock.innerHTML !== '') {
        if (valueBlock.innerHTML > 0) {
            firstNumberBlock.innerHTML = -Math.abs(valueBlock.innerHTML);
            signBlock.innerHTML = '';
            secondNumberBlock.innerHTML = '';
            valueBlock.innerHTML = '';
        } else {
            firstNumberBlock.innerHTML = Math.abs(valueBlock.innerHTML);
            signBlock.innerHTML = '';
            secondNumberBlock.innerHTML = '';
            valueBlock.innerHTML = ''; 
        }
    } else if (signBlock.innerHTML == '') {
        if (firstNumberBlock.innerHTML == '') {
            return
        } else if (firstNumberBlock.innerHTML > 0) {
            firstNumberBlock.innerHTML = -Math.abs(firstNumberBlock.innerHTML);
        } else {
            firstNumberBlock.innerHTML = Math.abs(firstNumberBlock.innerHTML);
        }
    } else if (valueBlock.innerHTML !== '') {
        return
    } else if (secondNumberBlock.innerHTML == '') {
        return
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
        } else if (firstNumberBlock.innerHTML.length < 1) {
            return
        } else {
            firstNumberBlock.innerHTML += '.';
        }
    } else if (valueBlock.innerHTML !== '' || secondNumberBlock.innerHTML.includes('.')) {
        return
    } else if (secondNumberBlock.innerHTML.length < 1) {
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
    if (valueBlock.innerHTML !== '') {
        firstNumberBlock.innerHTML = valueBlock.innerHTML * 0.01;
        signBlock.innerHTML = '';
        secondNumberBlock.innerHTML = '';
        valueBlock.innerHTML = '';
    } else if (signBlock.innerHTML == '' && firstNumberBlock.innerHTML == '') {
        return
    } else if (signBlock.innerHTML == '' && firstNumberBlock.innerHTML !== '') {
        firstNumberBlock.innerHTML = firstNumberBlock.innerHTML * 0.01;
    } else if (secondNumberBlock.innerHTML == '') {
        return
    } else {
        secondNumberBlock.innerHTML = secondNumberBlock.innerHTML * 0.01;
    }
}

function clearLastDigit() {
    if (signBlock.innerHTML == '') {
        firstNumberBlock.innerHTML = firstNumberBlock.innerHTML.toString().slice(0,-1);
    } else if (valueBlock.innerHTML !==''){
        return
    } else {
        secondNumberBlock.innerHTML = secondNumberBlock.innerHTML.toString().slice(0,-1);
    }
}

function outcome() {
    let result;
    const firstHTML = firstNumberBlock.innerHTML;
    const secondHTML = secondNumberBlock.innerHTML;
    if (firstHTML === '' || secondHTML === '') {
        return
    } else {
        switch (signBlock.innerHTML) {
            case '÷':
                result = firstHTML / secondHTML;
                valueBlock.innerHTML = result.toFixed(2);
                break;
            case '*':
                result = firstHTML * secondHTML;
                valueBlock.innerHTML = result.toFixed(2);
                break;
            case '+':
                result = parseFloat(firstHTML) + parseFloat(secondHTML);
                valueBlock.innerHTML = result.toFixed(2);
                break;
            case '-':
                result = firstHTML - secondHTML;
                valueBlock.innerHTML = result.toFixed(2);
                break;
        }   
    }
}
