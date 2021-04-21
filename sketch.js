var ball,img,paddle;
var paddleimg;
var left,down,up;
function preload() {
  /* preload your images here of the ball and the paddle */
  img = loadImage("ball.png")
  paddleimg = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(200,200,10,10);
  paddle = createSprite(350,200,10,50);
  left = createSprite(0,0,10,5000);
  down = createSprite(0,400,100000,10);
  up = createSprite(400,0,1000000,10);
  /* assign the images to the sprites */
  ball.addImage(img);
  paddle.addImage(paddleimg);
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityY = 9;
 ball.velocityX = 7;
}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(left);
  ball.bounceOff(up);
  ball.bounceOff(down);
  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle);
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */ paddle.velocityY = -10;
  }
  if(keyWentUp(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */ paddle.velocityY = 0;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */  paddle.velocityY = +10;
  }
  if(keyWentUp(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */  paddle.velocityY = 0;
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

