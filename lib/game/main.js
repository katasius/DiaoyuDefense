ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'impact.debug.debug',
	
	'game.entities.tower',
	'game.entities.towerflip',
	'game.entities.island',
	'game.entities.spawnship',
	'game.entities.spawnship2flip',
	'game.entities.ship',
	'game.entities.ship2flip',
	'game.entities.ship3',
	'game.entities.bullet',
	'game.entities.bulletflip',
	'game.entities.bulletenemies',
	'game.entities.bulletenemiesflip',
	'game.entities.flaghongkong',
	'game.entities.flagchina',
	'game.entities.flagtaiwan',
    'game.plugins.empika.entity_utilities',
	'game.plugins.empika.game_utilities',
	'game.plugins.empika.entity_tween',
	'game.plugins.empika.html_button',
	
	'game.levels.main',
	'game.levels.untitled',
	'game.levels.over',
	'game.levels.menu1',
	'game.levels.menu2'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	flag:'china',
	hiscore:0,
	score:0,
	kills:0,
	money:200,
	
	init: function() {
		// Initialize your game here; bind keys etc.
		ig.input.bind(ig.KEY.ENTER, 'enter');
		ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
		ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
		ig.input.bind(ig.KEY.MOUSE1, 'klik');
		
		
		this.loadLevel(LevelMenu1);
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		//var x = ig.system.width/2,
		//	y = ig.system.height/2;
		
		//this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 640, 480, 1 );

});
