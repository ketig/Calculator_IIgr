function addToDisplay(x) {
    document.getElementById("display").value += x;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function leftDelete() {
    // "78+545-34"
    let str = document.getElementById("display").value;
    let result = str.substring(0, str.length - 1);// "78+545-3"

    document.getElementById("display").value = result;
}

function calculate() {
    let str = document.getElementById("display").value;
    console.log(str);
    let result = 0;

    document.getElementById("displayResult").value = result;
}
// Math.max(3, 56, 2) // პარამეტრებიანი
// Math.random() // უპარამეტრებო