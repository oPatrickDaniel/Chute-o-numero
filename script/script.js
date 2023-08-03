// elementos html
let inputNumber = document.getElementById("inputNum")
let sendButton = document.getElementById("sendButton")
let trialElement = document.getElementById("attempt")
let resultElement = document.getElementById("result")
let playAgainElement = document.getElementById("playAgain")

// variáveis iniciais
let randomNumber = Math.round(Math.random() * 10)
let attemptNumber = 0;

function numberPlayer() {
    // verifica se o numero do usuário é valido e o  armazena;
    let InputValue = parseFloat(inputNumber.value)

    if (InputValue >= 0 && InputValue <= 10 && Number.isInteger(InputValue) == true) {
        return InputValue
    }
}

function printResultInHtml() {
    // retorna o resultado da tentativa para o cliente

    resultElement.classList.remove("right-answer")
    resultElement.classList.remove("wrong-answer")

    if (randomNumber === numberPlayer()) {
        resultElement.classList.add("right-answer")
        trialElement.innerText = "tentativas: " + attemptNumber
        resultElement.innerText = "Parabéns você acertou"
        playAgainElement.classList.remove("d-none")

    } else if (randomNumber > numberPlayer()) {
        resultElement.classList.add("wrong-answer")
        trialElement.innerText = "tentativas: " + attemptNumber
        resultElement.innerText = "Resposta errada: o número é MAIOR"

    } else if (randomNumber < numberPlayer()) {
        resultElement.classList.add("wrong-answer")
        trialElement.innerText = "tentativas: " + attemptNumber
        resultElement.innerText = "Resposta errada: o número é MENOR"

    } else {
        resultElement.classList.add("wrong-answer")
        resultElement.innerText = "INSIRA UM VALOR VALIDO"
    }
}

inputNumber.addEventListener('change', () => {
    attemptNumber++
    printResultInHtml()
})

sendButton.addEventListener('click', () => {
    attemptNumber++
    printResultInHtml()
})

playAgainElement.addEventListener('click', () => {
    location.reload(true)
})