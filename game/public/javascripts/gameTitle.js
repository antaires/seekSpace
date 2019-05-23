function create() {
  this.add.text(50, 100, "The Unsettling Adventures of the Creature from Farout", { font: "40px Times New Roman", fill: "#ffa0d0"});

    // this.add.text(130, 300, "by vdlo", { font: "20px Times New Roman", fill: "#ffa0d0"});
  }
  
  const config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 600,
    backgroundColor: "#5f2a55",
    scene: {
    create
    }
  };
  
  const game = new Phaser.Game(config);
  