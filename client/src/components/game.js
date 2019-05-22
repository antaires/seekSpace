'use strict'
/* eslint-disable */

import Phaser from 'phaser'

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
  backgroundColor: "#4286f4",//"#5f2a55",
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
  this.load.image('background', '@components../assets/BackgroundV3.png');  
  this.load.image('platform', '@components../assets/statue1.png');
  this.load.image('star', '@components../assets/star.png');
  this.load.image('bomb', '@components../assets/bomb.png');
  this.load.image('ground', '@components../assets/ground.png');
  this.load.spritesheet('player', '@components../assets/player.png', {frameWidth: 32, frameHeight: 48});
}

// convert assets to form usable by Phaser
function create() {
  // add background
  gameState.background = this.add.sprite(400, 300, 'background');
  gameState.background.setDisplaySize(1200, 600);

  // score
  gameState.score = 0;
  gameState.scoreText = this.add.text(16, 16, 'score: 0', {fontSize: '32px', fill:'#000'});
}

// for player input, animations and game logic
function update() {

  if (gameState.gameOver) {
    return;
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

    