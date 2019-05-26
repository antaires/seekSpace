'use strict';

// for tracking game state
const gameState = {};
gameState.gameOver = false;
gameState.width = 1200;
gameState.height = 600;
gameState.gravity = 500;
gameState.onFloor = false;

const config = {
  type: Phaser.AUTO,
  width: gameState.width,
  height: gameState.height,
  backgroundColor: "#5f2a55",
  physics: {
    default: 'arcade',
    arace: {
      gravity: {y: gameState.gravity},
      debug: false
    }
  },
  scene: {
    preload,
    create,
    update
  }
};
const game = new Phaser.Game(config);

// load all assest (images, audio etc)
function preload() {
  // this.load.image('player', 'images/testCreature.png');
  this.load.image('background', 'images/BackgroundV3.png');  
  this.load.image('platform', 'images/statue1.png');
  this.load.image('star', 'images/star.png');
  this.load.image('bomb', 'images/bomb.png');
  this.load.image('ground', 'images/ground.png');
  this.load.spritesheet('player', 'images/player2.png', {frameWidth: 32, frameHeight: 48});
}

// convert assets to form usable by Phaser
function create() {
  // add background
  gameState.background = this.add.sprite(600, 300, 'background');
  gameState.background.setDisplaySize(1200, 600);

  // CREATE MOVING PLATFORMS
  gameState.platforms = this.physics.add.group();
  function makeBlock(){
    for (var i = 0; i < 5; i++){
      gameState.platforms.create(getRandom(0, 1200), 50, 'platform');
    }
  }
  makeBlock();

  /*// CREATE STATIC PLATFORMS
  gameState.platforms = this.physics.add.staticGroup();
  gameState.platforms.create(400, 500, 'platform').setScale(2).refreshBody();
  gameState.platforms.create(100, 400, 'platform');
  gameState.platforms.create(700, 400, 'platform');
  gameState.platforms.create(600, 400, 'platform');*/

  // score
  gameState.score = 0;
  gameState.scoreText = this.add.text(16, 16, 'score: 0', {fontSize: '32px', fill:'#000'});

  // NORMAL SPRITE
  // gameState.player = this.add.sprite(300, 500, 'player');
  // gameState.player.scale.setTo(10, 10);

  // PHYSICS SPRITE
  gameState.player = this.physics.add.sprite(100, 0, 'player');
  gameState.player.setBounce(0.1);
  gameState.player.body.setGravityY(1200);
  // keep player onscreen
  gameState.player.setCollideWorldBounds(true);

  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNames('player', {start: 0, end: 3}),
    frameRate: 10,
    repeat: -1
  });
  this.anims.create({
    key: 'turn',
    frames: [{ key: 'player', frame: 4}],
    //frames: this.anims.generateFrameNames('turn', {prefix: 'images/player', start: 4, end: 4, suffix: '.png'}),
    frameRate: 20
  });
  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNames('player', {start: 5, end: 8}),
    frameRate: 10,
    repeat: -1
  });
  // check collision between player and platforms
  this.physics.add.collider(gameState.platforms, gameState.player);
  // set up cursor control of player
  gameState.cursors = this.input.keyboard.createCursorKeys();

  // ground
  gameState.ground = this.physics.add.sprite(600, 600, 'ground');
  gameState.ground.body.immovable = true;
  // if player collides with ground, set onFloor to true
  this.physics.add.collider(gameState.player, gameState.ground, onGround, null, this);
  function onGround(player, ground) {
    gameState.onFloor = true;
  }

  // bomb
  gameState.bombs = this.physics.add.group();
  this.physics.add.collider(gameState.bombs, gameState.platforms);
  this.physics.add.collider(gameState.player, gameState.bombs, hitBomb, null, this);

  function hitBomb(player, bomb) {
    this.physics.pause();
    player.setTint(0xff0000);
    player.anims.play('turn');
    gameState.gameOver = true;
  }

  // star
  //gameState.star = this.add.image(400, 300, 'star');
  gameState.stars = this.physics.add.group({
    key: 'star',
    repeat: 11,
    // space out stars by stepX distance
    setXY: { x: 12, y: 0, stepX: 70}
  });

  gameState.stars.children.iterate(function(child) {
    // create a dynamic group inside a static group for bouncing pickups
    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0,8));
    child.body.setGravityY(1200);
    child.setCollideWorldBounds(true);
  });
  // collide with platforms
  this.physics.add.collider(gameState.stars, gameState.platforms);
  // check if player is overlapping
  this.physics.add.overlap(gameState.player, gameState.stars, collectStar, null, this);
  function collectStar(player, star) {
    star.disableBody(true, true);
    gameState.score += 10;
    gameState.scoreText.setText('Score: ' + gameState.score);

    if (gameState.stars.countActive(true) === 0) {
      gameState.stars.children.iterate(function (child) {
        child.enableBody(true, child.x, 0, true, true);
      });
      
      // shoot a bomb towards opposite side of screen from player
      var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
      var bomb = gameState.bombs.create(x, 16, 'bomb');
      bomb.setBounce(1);
      bomb.setCollideWorldBounds(true);
      bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    }
  }

  // add colliders to all platforms in MOVING 
  gameState.platforms.children.iterate(function(child) {
    child.body.setGravityY(1200);
    child.setCollideWorldBounds(true);
    child.body.setVelocityX(-100);
    //child.body.immovable = true;
  });
  // this.physics.add.collider(gameState.platforms, gameState.platforms); 

  this.physics.add.collider(gameState.ground, gameState.player);
  this.physics.add.collider(gameState.ground, gameState.platforms);
  this.physics.add.collider(gameState.ground, gameState.bombs);
  this.physics.add.collider(gameState.ground, gameState.stars);
}

// for player input, animations and game logic
function update() {

  if (gameState.gameOver) {
    return;
  }

  // movement control
  if (gameState.cursors.left.isDown) {
    // gameState.player.x -= 5;
    gameState.player.body.setVelocityX(-200);
    gameState.player.anims.play('left', true);
  } else if (gameState.cursors.right.isDown) {
    // gameState.player.x += 5;
    gameState.player.body.setVelocityX(200);
    gameState.player.anims.play('right', true);
  } else {
    gameState.player.body.setVelocityX(0);
    gameState.player.anims.play('turn', true);
  }
  // jump
  if ((gameState.cursors.space.isDown || gameState.cursors.up.isDown) && gameState.onFloor) {
    gameState.player.body.setVelocityY(-700);
    gameState.onFloor = false;
  }

  movePlatforms();
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


function movePlatforms() {
  gameState.platforms.children.iterate(function(child) {
    if ( child.body.x < 50 ) {
      //put it in a random place
      //var x = getRandom(gameState.width, gameState.width + 20);
      child.body.setVelocityX(+100);
    } else if ( child.body.x > 1000) {
      child.body.setVelocityX(-100);
    }
  });
}
    