<template>
  <div id='gameScreen'></div>
</template>

<script>
/* eslint-disable no-unused-vars */
import 'pixi'
import 'p2'
import Phaser from 'phaser'
/* eslint-enable no-unused-vars */

export default{
  name: 'game',
  props: {
    width: Number,
    height: Number
  },
  mounted () {
    let self = this
    if (this.game == null) {
      // const gameState = {}
      this.game = new Phaser.Game(this.width, this.height, Phaser.AUTO, this.$el, {
        preload: function preload () {
          self.preload(this)
        },
        create: function create () {
          self.create(this)
        },
        update: function update () {
          self.update(this)
        }
      })
    }
  },
  methods: {
    preload () {
      this.load.image('background', '../assets/hubble_nebula1.jpg')
    },
    create (phaser) {
      this.add.image(0, 0, 'background')
    },
    update (phaser) {
    }
  },
  destroyed () {
    this.game.destroy()
  },
  data () {
    return {
      game: null
    }
  }
}
</script>

<style>
#gameScreen {
  margin: 0 auto;
}

#gameScreen canvas {
  display: block;
  margin: 0 auto;
}
</style>
