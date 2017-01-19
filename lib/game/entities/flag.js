ig.module( 
	'game.entities.flag' 
)
.requires(
	'impact.entity',
    'impact.font'
)
.defines(function(){
    
    EntityFlag = ig.Entity.extend({
        size: {x:146,y:100},
        font: new ig.Font( 'media/font_04b03_black_16.png' ),
        
        init: function(x,y,settings){
            this.parent(x,y,settings);
            this.animSheet= new ig.AnimationSheet('media/flag_'+ig.game.flag+'.png', 146,100);
            this.addAnim('idle',1,[0]);
            this.waveSpd = new ig.Timer( 30 );//30 sec each wave
            this.wave=1;
        },
    
         update: function() {
         this.parent();
         var island = ig.game.getEntitiesByType(EntityIsland)[0];
         var Spawnship = ig.game.getEntitiesByType(EntitySpawnship)[0];
         var Spawnship2flip = ig.game.getEntitiesByType(EntitySpawnship2flip)[0];
         
         if(this.waveSpd.delta() >0){
            this.wave++;
            Spawnship.spawntime-=Spawnship.difficulty;
            ig.game.spawnEntity( EntityShip, 700, 400 );
            ig.log("next Wave");
            Spawnship2flip.spawntime-=Spawnship2flip.difficulty;
            ig.game.spawnEntity( EntityShip2flip, -140, 400 );
            Spawnship2flip.wave2=true;
            this.waveSpd.reset() ;
         }
         
          if(island.health==1){
             ig.game.score=island.totalscore;
             island.score.reset();
             ig.game.loadLevel( LevelOver );} 
             
         },
         draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
            //this.font.draw( 'Wave: '+this.wave.round(), 10, 90, ig.Font.ALIGN.LEFT );
            //this.font.draw( 'Next Wave: '+this.waveSpd.delta().round(), 10, 100, ig.Font.ALIGN.LEFT );
        }
     });   
    });