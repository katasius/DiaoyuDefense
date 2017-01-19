ig.module( 
	'game.entities.restart' 
)
.requires(
	'impact.entity',
    'impact.font'
)
.defines(function(){
    
    EntityRestart = ig.Entity.extend({
        size: {x:92,y:86},
        font: new ig.Font( 'media/font_04b03_black_16.png' ),
        animSheet: new ig.AnimationSheet('media/restart_btn.png', 92,86),
        
        init: function(x,y,settings){
            this.parent(x,y,settings);
            this.addAnim('idle',1,[0]);
            this.addAnim('idle1',1,[1]); 
                        
        },
    
         update: function() {
            this.parent();
         
            if( this.isMouseInside() ){
               this.currentAnim = this.anims.idle1;}
            else{
                this.currentAnim = this.anims.idle;}
            
            if( ig.input.pressed('klik')&& this.isMouseInside() ){    
                ig.game.money=200;
                ig.game.kills=0;
                ig.game.loadLevel( LevelMenu2 );
            }
         },
         
         draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		this.font.draw( 'Score: '+ig.game.score.round(), 250, 320, ig.Font.ALIGN.LEFT );
        this.font.draw( 'CannonDestroyed: '+ig.game.kills.round(), 250, 360, ig.Font.ALIGN.LEFT );
        this.font.draw( 'HiScore: '+ig.game.hiscore.round(), 250, 340, ig.Font.ALIGN.LEFT );
        },
        
     });   
    });