function onNumBtn(num) {
    // что сделать? и решать одну задачу
    // alert("num btn clicked " + num);
    var output = document.getElementById('output');
    output.innerText += num;
}


function onClearBtn() {
    var output = document.getElementById('output')
    output.innerText = '';
}

function onOpBtn(op) {
    var output = document.getElementById('output')
    output.innerText += ' * ';
}

function Difference(op) {
    var output = document.getElementById('output')
    output.innerText += ' - ';
}

function onDivisionBtn(op) {
    var output = document.getElementById('output')
    output.innerText += ' / ';
}

function onAdditionBtn(op) {
    var output = document.getElementById('output')
    output.innerText += ' + ';
}


function onEqualBtn() {
    var output = document.getElementById('output');
    //console.log( eval(output.innerText) );
    var r = eval(output.innerText)
    output.innerText = '  ';
    output.innerText = r ;
    
}