const output = document.querySelector(".output");

let inputMutex = 0
let inputNum = "0"

let equation = {
    inputs: ["0", "0", ""],
};

document.querySelector(".calculator").addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON" && event.target.className.includes("num")) {
        updateEquation(event.target.innerText)

        updateDisplay();
    } else if (event.target.nodeName == "BUTTON" && event.target.className.includes("operator")) {
        
        updateOperator(event.target.innerText);
        updateDisplay();
        updateMutex();
    } else if (event.target.className.includes("equals")) {
        evaluateEquation();
        updateDisplay();
    } else if (event.target.className.includes("clear")) {
        clearEquation();
        updateDisplay();
    } else if (event.target.className.includes("del")) {
        deleteInput();
        updateDisplay();
    }    
});

function updateDisplay() {
    output.innerText = equation.inputs[inputMutex];
}

function updateEquation(num) {
    if (equation.inputs[inputMutex] == "0") {
        equation.inputs[inputMutex] = num;
    } else {
        equation.inputs[inputMutex] += num;
    }

}

function updateOperator(operator) {
    if (equation.inputs[2] != "") {
        evaluateEquation();
    }
    equation.inputs[2] = operator;
}

function evaluateEquation() {
    let result = 0;

    if (equation.inputs[2] == "+") {
        result = +equation.inputs[0] + +equation.inputs[1];
    } else if (equation.inputs[2] == "-") {
        result = +equation.inputs[0] - +equation.inputs[1];
    } else if (equation.inputs[2] == "x") {
        result = +equation.inputs[0] * +equation.inputs[1];
    } else if (equation.inputs[2] == "/") {
        result = +equation.inputs[0] / +equation.inputs[1];
    } else {
        result = +equation.inputs[0]
        updateMutex();
    }

    equation.inputs[0] = result.toString();
    equation.inputs[1] = "0";
    equation.inputs[2] = "";
    updateMutex();
}

function updateMutex() {
    inputMutex = (inputMutex + 1) % 2;
}

function clearEquation() {
    equation.inputs[0] = "0";
    equation.inputs[1] = "0";
    equation.inputs[2] = "";
    inputMutex = 0;
}

function deleteInput() {
    equation.inputs[inputMutex] = equation.inputs[inputMutex].slice(0, equation.inputs[inputMutex].length - 1);
}