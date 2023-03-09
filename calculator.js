let Display = document.getElementById('content');

function add(x,y){
    return x+y 
}

function subtract(x,y){
    return x-y 
}

function multiply(x,y){
    return x*y 
}

function divide(x,y){
    return x/y
}

function operate(z,x,y){
//    console.log(x,y,z)
let result;
    x = Number(x);
    y = Number(y);
    if(z === '+'){
        result = add(x,y)
        console.log(add(x,y))
    }else if(z == '-'){
        result = subtract(x,y)
        console.log(subtract(x,y))
    }else if(z == '*'){
        result = multiply(x,y)
        console.log(multiply(x,y))
    }else if(z == '/'){
        result = divide(x,y)
        console.log(divide(x,y))
    }
    return result
}

function clearAll(){
    document.getElementById('content').innerHTML = ''
}
const addDigit = (number) => {
    let inputDisplay = Display.innerText;
    Display.innerText = inputDisplay.concat("",number);
    //console.log(inputDisplay)
    //return inputDisplay;
}
function bigButton(x){
//    x.style.height = '60px'
//    x.style.width = '60px'
    x.style.backgroundColor = 'rgb(81, 77, 77)'
}
function normalButton(x){
//    x.style.height = '65px'
//    x.style.width = '65px'
    x.style.backgroundColor = 'grey'
}
//console.log(addDigit(''))

function displayValue(item){
    firstNumber = Display.innerText;
    console.log(firstNumber)
    //let inputDisplay = Display.innerText;
    operator = item
    console.log(operator)
    Display.innerText = firstNumber.concat(item)
    Display.innerText = ''
}

function equalsAll(){
    let secondNumber = Display.innerText;
    console.log(secondNumber)
    console.log(operate(operator,firstNumber,secondNumber))
    finalNumber = operate(operator,firstNumber,secondNumber)
    //Display.innerText = ''
    Display.innerText = operate(operator,firstNumber,secondNumber)
}
//document.getElementById('demo3').innerHTML = 'subtract' + ' ' + subtract(20,15)
//document.getElementById('demo4').innerHTML = 'multiply' + ' ' + multiply(3,3)
//document.getElementById('demo5').innerHTML = 'divide' + ' ' + divide(20,5)