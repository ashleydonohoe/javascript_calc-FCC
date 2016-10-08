var total = 0;
var calculatorString = "0";
var currentOperation;
var currentNumber = "";

$('button').click(function() {
    if(this.value == "clear") {
        total = 0;
        calculatorString = "";
        $("#result").text(0);
    } else if(Number(this.value) || this.value == ".") {
        calculatorString += this.value;
        $("#result").text(calculatorString);
    } else if(this.value == "=") {
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
            if(currentNumber != null) {
                currentOperation = this.value;
                performCalculation()
            } else {
                currentOperation = this.value;
                currentNumber = calculatorString;
            }
            $("#result").text(currentOperation);
            calculatorString = "";
        }
    }
});

function performCalculation() {
    switch(currentOperation) {
        case "*":
            console.log(total + " is being multiplied by " + calculatorString);
            total *= Number(calculatorString);
            break;
        case "-":
            console.log(total + " minus " + calculatorString);
            total = total - Number(calculatorString);
            break;
        case "+":
            console.log(total + " plus " + calculatorString);
            total += Number(calculatorString);
            break;
        case "/":
            console.log(total + " divided by " + calculatorString);
            total /= Number(calculatorString);
            break;
    }

    console.log("Current total: " + total);
    $("#result").text(total);
}