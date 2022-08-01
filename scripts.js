const calculatorScreen = document.getElementById('results')

function display(num){
    calculatorScreen.value += num
}

function percent() {
    calculatorScreen.value = calculatorScreen.value * 0.01
}

function calculate(){
    try {
        calculatorScreen.value = stringMath(calculatorScreen.value)
    } catch (err) {
        alert('Cannot compute 🤖')
    }
}

function clearScreen(){
    calculatorScreen.value = ""
}






