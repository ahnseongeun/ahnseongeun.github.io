const range = document.querySelector("#range-form input");
const input = document.querySelector("#input-number");
const submitForm = document.querySelector("#submit-form");
const resultValue = document.querySelector("div.resultValue");

function handlerRange(){
    const rangeMax = range.value;
    input.setAttribute("max", String(rangeMax));
}

function handlerPlay(event) {
    event.preventDefault();
    const rangeNum = range.value;
    const inputNum = input.value;
    const randomNum = Math.round(Math.random() * rangeNum);
    setResult(inputNum, randomNum);
}

function setResult(number1, number2) {
    const convertNumber1 = parseInt(number1);
    const convertNumber2 = parseInt(number2);
    if(convertNumber1 == convertNumber2) {
        resultValue.innerText = `You chose: ${convertNumber1} , the machine chose: ${convertNumber2}
        \nYou Win!`;
    } else {
        resultValue.innerText = `You chose: ${convertNumber1} , the machine chose: ${convertNumber2}
        \nYou Lost!`
    }
}

range.addEventListener("input",handlerRange);
submitForm.addEventListener("submit",handlerPlay);




