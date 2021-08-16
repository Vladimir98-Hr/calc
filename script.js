// скрипт запускается в том месте, где мы добавили его в теге script
var output = document.getElementById('output');
var exprOutput = document.querySelector('.expression');
//var expr = '';

function getOutput() {
    return output.innerText;
}

function getExprOutput() {
    return exprOutput.innerText;
}

function getLastExprValue() {
    return getExprOutput().split(' ').slice(-1)[0]; // <- цепочка вызовов ф-ций (chaining)
}

function addToOutput(value) {
    output.innerText += value;
}

function addToExprOutput(value) {
    exprOutput.innerText += value;
    //exprOutput.innerText += onNumBtn(num)
}

function clearOutput() {
    output.innerText = '';
}

function isIntDigit(value) {
    // parseInt('3') -> 3 -> isNaN(3) -> false -> !false -> true
    // parseInt('*') -> NaN -> isNaN(NaN) -> true -> !true -> false
    return !isNaN(parseInt(value));
}

function isEmptyString(s) {
    return !s;
}

function isNotEmptyString(s) {
    return !!s;
}

function onNumBtn(num) {
    // что сделать? и решать одну задачу
    // alert("num btn clicked " + num);
    if(num == '='){
        onEqualBtn()
        exprOutput.innerText = '';
        
        

    }
    else{
        var lastValue = getLastExprValue();

    // Если у нас в конце выражения знак '=',
    // то очистить верхнее выражение и отобразить введенное число в output
    
    
    // Если не пустое верхнее выражение  и была нажата операция, то
        if ( isNotEmptyString( getExprOutput() ) && !isIntDigit(lastValue) ) {
            clearOutput();
        }
    
    
    
        addToOutput(num);
    }


}


function onClearBtn() {  // вызов только при клике
    exprOutput.innerText = '';
    clearOutput();
}

function onOpBtn(op) {
    
    var exprPart =  getOutput() + ' ' + op;
    addToExprOutput( exprPart );
}



function onEqualBtn() {

    var expr = getExprOutput();
    var output = getOutput();

    var result = eval(expr + output);
    addToExprOutput(output + ' = ');
    
    clearOutput();
    addToOutput(result);

    //return exprOutput.innerText;
}