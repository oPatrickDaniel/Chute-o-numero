
function aleatoricNumber() {
    // cria um numero aleatório

    let aleatoricNumber = Math.round(Math.random() * 10)
    return aleatoricNumber
}
let n = aleatoricNumber()

function numberPlayer() {
    // armazena o numero do cliente

    let player = document.getElementById("input-number")
    number = parseFloat(player.value)

    // verifica se o o numero do cliente é um numero valido

    if (number <= 10 && number >= 0 && Number.isInteger(number) == true) {
        return number
    }
}

let attemptNumber = 1;
function result() {
    // retorna o resultado da tentativa para o cliente

    let attempt = document.getElementById("attempt")
    let result = document.getElementById("result")
    let play = document.getElementById("play")

    if (n == numberPlayer()) {


        attempt.classList.remove("hidden")
        result.classList.remove("hidden")
        play.classList.remove("hidden")
        result.classList.add("correct")
        attempt.innerText = "tentativas: " + attemptNumber
        result.innerText = "Parabéns você acertou"

    } else if (n > numberPlayer()) {
        attempt.classList.remove("hidden")
        result.classList.add("wrong")
        result.classList.remove("hidden")
        attempt.innerText = "tentativas: " + attemptNumber
        result.innerText = "Resposta errada: o número é maior"
        attemptNumber++
        play.reset()

    } else if (n < numberPlayer()) {
        attempt.classList.remove("hidden")
        result.classList.add("wrong")
        result.classList.remove("hidden")
        attempt.innerText = "tentativas: " + attemptNumber
        result.innerText = "Resposta errada: o número é menor"
        attemptNumber++
        play.reset()

    } else {
        result.classList.add("wrong")
        result.classList.remove("hidden")
        result.innerText = "INSIRA UM VALOR VALIDO"
        play.reset()
    }
}

function playAgain() {
    location.reload(true)
}