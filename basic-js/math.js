document.addEventListener("DOMContentLoaded", function (e) {
    readNumber();
});

const results = {
    number: 0,
    sqrt: 0,
    integer: false,
    roundDown: 0,
    roundUp: 0,
    twoDecimal: 0,
}

function readNumber(msg = 'Typing your number') {
    results.number = +(prompt(msg));
    if (Number.isNaN(results.number)) {
        readNumber('Number Invalid! Try again');
        return;
    }
    runCalc();
}

function runCalc() {
    results.sqrt = Math.sqrt(results.number);
    results.integer = Number.isInteger(results.number);
    results.roundDown = Math.floor(results.number);
    results.roundUp = Math.ceil(results.number);
    results.twoDecimal = results.number.toFixed(2);

    renderResults();
}

function renderResults() {
    for (let prop in results) {
        let htmlItem = document.getElementById(prop);
        htmlItem.innerHTML = results[prop];
    }
}
