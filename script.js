//Variáveis de controle gerais
let order =[]
let clickedOrder = []
let score = []
//Quadrantes do jogo
const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

//Funcao para criar uma ordem e piscar nessa ordem criada
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order.push(colorOrder)
    clickedOrder = []

    for (let i in order) {
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}
// Funcao para piscar
let lightColor = (el, num) => {
    num = num * 1000
    setTimeout( () => {
        el.classList.add('selected')
    }, num - 250 )
    setTimeout( () => {
        el.classList.remove('selected')
    }, num)
}
//Funcao para checar a ordem clicada
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            GameOver()
            break
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Parabéns, você acertou!\nPontuação: ${score}\nIniciando o próximo nível!`)
        nextLevel()
    }
}
//Funçao para (piscar) os cliques do usuário
let click = (color)  => {
    clickedOrder[clickedOrder.length] = color
    createColorElement(color).classList.add('selected')

    setTimeout( () => {
        createColorElement(color).classList.remove('selected')
        checkOrder()
    },250 )
}
// Determinar o quadrante (cor) de acordo com o número (da ordem criada)
let createColorElement = (color) => {
    switch (color) {
        case 0: return green
        case 1: return red
        case 2: return yellow
        case 3 : return blue
    }
}
//Funcao para o proximo Nível (Sucesso)
let nextLevel = () => {
    score++
    shuffleOrder()
}
//Funcao para o fim do Jogo (Falha)
let GameOver = () => {
    alert(`Você errou... :(\nPontuação: ${score}\nClique em OK para jogar novamente.`)
    order = []
    clickedOrder = []

    playGame()
}
//Funcao para iniciar o jogo (Inicio)
let playGame = () => {
    alert(`Bem-vindo ao Genius!\nCarregando o jogo...`)
    alert('Acerte a ordem correta!\nClique em OK para começar!')
    score = 0

    nextLevel()
}
//Receptores dos cliques do jogador
green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)
//Começar o jogo ao abrir o arquivo
playGame();