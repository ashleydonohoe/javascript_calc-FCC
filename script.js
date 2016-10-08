var total = 0;
var calculatorString = "0";
var currentOperation ;

$('button').click(function() {
    if(this.value == "clear") {
        total = 0;
        calculatorString = "";
        $("#result").text(0);
    } else if(Number(this.value) || this.value == ".") {
        calculatorString += this.value;
        $("#result").text(calculatorString);
    } else if(this.value == "=") {
        console.log(currentOperation);
        console.log(total);
        performCalculation();
        total = 0;
        calculatorString = "";
        currentOperation = "";
    } else {
        if(currentOperation == null) {
            total = Number(calculatorString);
            currentOperation = this.value;
            $("#result").text(currentOperation);
            calculatorString = "";
        } else {
            alert("Current Op is not null!");
        }
    }
});

function performCalculation() {
    switch(currentOperation) {
        case "*":
            total *= Number(calculatorString);
            break;
        case "-":
            total -= Number(calculatorString);
            break;
        case "+":
            total += Number(calculatorString);
            break;
        case "/":
            total /= Number(calculatorString);
            break;
    }
    console.log(total);
    $("#result").text(total);
}