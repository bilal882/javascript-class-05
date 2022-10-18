function roundNumber() {
    let number = 10.50
    let newNumber = Math.round(number);


    console.log(newNumber);
}

function randomNumber() {
    let randomNumber = Math.random();
    console.log(randomNumber);
}

function convertStringToNumber() {
    let number = prompt("Enter a number");
    let newNumber = parseInt(number)

    let string = parseInt("798718") + 32798720;
    console.log(newNumber);
}

function stringToNumber() {
    let number = prompt("Enter a number");
    let newNumber = Number(number)
    console.log(newNumber);
}

function numberToString() {
    let number = 1234567890;
    let newString = number.toString();

    console.log(newString);
}


function fixedDecimal() {
    let number = prompt("Enter a number");
    let newNumber = Number(number);

    let FixedDecimal = Math.round(newNumber)
    console.log(FixedDecimal);

}