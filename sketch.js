let playerPaddle;
let aiPaddle;
let ball;
let playerScore;
let aiScore;
 
function setup() {
  createCanvas(624, 351);
  frameRate(144);
  playerPaddle = new Paddle(26);
  aiPaddle = new Paddle(width - 48);
  ball = new Ball();

  const date = new Date();

  playerScore = new Score(width / 2 - 40, date.getHours());
  aiScore = new Score(width / 2 + 40, date.getMinutes());
}
 
function draw() {
  background(0);
  playerPaddle.update();
  aiPaddle.update();
  
  

  const currentTime = new Date();

  if (currentTime.getMinutes() == aiScore.score || aiScore.score == 59) {
    processAI(playerPaddle, -1);
  }
  
  if (currentTime.getHours() == playerScore.score) {
    processAI(aiPaddle, 1);
  }
  
  ball.update(playerScore, aiScore); // call the update function within ball
  ball.display(); // call the display function within ball
  
  ball.hasHitPlayer(playerPaddle); 
  ball.hasHitAi(aiPaddle); 
  
  stroke(255); // gives a white stroke
  line(width/2, 0, width/2, height); // draws a line between two points line(x,y,x1,y1)
  
  playerPaddle.display();
  aiPaddle.display();
  playerScore.display();
  aiScore.display();
}

function processAI(paddle, direction) {
  const difference =  Math.abs(ball.xSpeed - direction);
  const opposite = Math.abs(-ball.xSpeed - direction);
  if (difference < opposite) {
    const middleOfPaddle = paddle.y + paddle.height / 2;
    if (Math.abs(middleOfPaddle - ball.y) < 20) {
      paddle.speed = 0;
    } else if (middleOfPaddle > ball.y) {
      paddle.speed = -paddle.startSpeed;
    } else if (paddle.y < (height - paddle.height)) {
      paddle.speed = paddle.startSpeed;
    }
  }
}


