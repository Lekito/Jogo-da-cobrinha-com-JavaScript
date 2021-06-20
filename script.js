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

document.addEventListener('keydown', update); // pega os movimentos do teclado.

function update(event){ // função que faz o uso das setas. O código das setas são do ASCII.
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){ 
    // permitir que a cobrinha ultrapasse as paredes.
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

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