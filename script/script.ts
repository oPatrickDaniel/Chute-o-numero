// elementos html
let inputNumber: HTMLInputElement | null = document.querySelector("#inputNum")
let sendButton = document.querySelector("#sendButton")
let trialElement: HTMLElement | null = document.querySelector("#attempt")
let resultElement: HTMLElement | null = document.querySelector("#result")
let playAgainElement = document.querySelector("#playAgain")

// variáveis iniciais
let randomNumber: number = Math.round(Math.random() * 10)
let attemptNumber: number = 0;

function numberPlayer() {
    // verifica se o numero do usuário é valido e o  armazena;
    if (!inputNumber) return 0
    let InputValue = parseFloat(inputNumber.value)

    if (InputValue >= 0 && InputValue <= 10 && Number.isInteger(InputValue) == true) {
        return InputValue
    }
    return 0
}

function printResultInHtml() {
    // retorna o resultado da tentativa para o cliente
    if (!resultElement || !trialElement || !playAgainElement) return

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

if (inputNumber && sendButton && playAgainElement) {

    inputNumber.addEventListener('change', () => {
        attemptNumber++
        printResultInHtml()
    })

    sendButton.addEventListener('click', () => {
        attemptNumber++
        printResultInHtml()
    })

    playAgainElement.addEventListener('click', () => {
        location.reload()
    })
}
