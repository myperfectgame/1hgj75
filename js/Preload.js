var PlatformerGame = PlatformerGame || {};

//loading the game assets
PlatformerGame.Preload = function(){};

PlatformerGame.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

    this.game.load.spritesheet('logo-tiles', 'assets/images/logo-tiles.png', 17, 16);
    this.game.load.spritesheet('tiles', 'assets/images/tiles75.png', 32, 32);
    this.game.load.spritesheet('mikael', 'assets/images/mikael.png', 32, 64);
    //this.load.tilemap('level1', 'assets/tilemaps/level1.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('sky', 'assets/images/sky_new.png');
    this.game.load.image('dollar', 'assets/images/dollarone.png');
    
    this.game.load.image('gamejam', 'assets/images/onehourgamejamlogo.png');

    this.game.load.audio('splash', 'assets/audio/onehourgamejamsplash.ogg');
    this.game.load.audio('music', 'assets/audio/music.ogg');
    

  },
  create: function() {
    var colour = "678";
    var timeout = 2;
    this.state.start('Logo', true, false, colour, timeout);
  }
};
