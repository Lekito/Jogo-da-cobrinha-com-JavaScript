let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); // contexto renderiza o desenho dentro do Canvas. 
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right"; // variável responsável pela direção da cobrinha.

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    // Criar a posição x e y do ponto de partida da cobrinha.
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Criar as condições para a cobrinha andar, indo para posição desejada.
    if(direction == "right") // avança preenchendo um quadradinha a frente.
        snakeX += box;
    if(direction == "left") // Decrementa altima posição. para dar a censação de movimento.
        snakeX -= box;
    if(direction == "up") 
        snakeY -= box;
    if(direction == "down") 
        snakeY += box;

    // Vamos adicionar a função POP para retirar o último elemento do Array da cobrinha.
    snake.pop();

    //Precisamos criar cabeça movel da cobrinha. Vamos usar unShift, que é um método para add um elemento a frente.
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
} 

let jogo = setInterval(iniciarJogo, 100); //intervalo de 100 mls para atualizar tempo o jogo.