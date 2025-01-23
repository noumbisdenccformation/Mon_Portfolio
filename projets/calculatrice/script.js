let expression = '';
function appendNumber(number){
    expression += number;
    updateResult();
}

function clearResult(){
    expression = '';
    updateResult();
}

function appendOperator(op){
    expression += op;
    updateResult();

}

function calculateResult() {
    try{
        const result = eval(expression);
        expression = result.toString();
        updateResult();
    }
    catch(error){
        alert('Invalid expression');
        clearResult();
    }
}

function updateResult () {
    const resultField = document.getElementById('result');
    resultField.value = expression;

}