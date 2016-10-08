var total = 0;
var calculatorString = "0";
var currentOperation =  "";

$('button').click(function() {
    if(this.value == "clear") {
        total = 0;
        calculatorString = "0";
        $("#result").text(calculatorString);
    } else if(Number(this.value)) {
        calculatorString += this.value;
        $("#result").text(calculatorString);
    } else if(this.value == "=") {
        switch(currentOperation) {
            // Convert current calc string to number
            // Use case statement against current operation based on sign
            // Do operation against current calc string and existing total
        }
    } else {
        total = Number(calculatorString)
        console.log(this.value);
        console.log("Current total: " + total);
        currentOperation = this.value;
        $("#result").text(currentOperation);
        calculatorString = ""
    }
});