ig.module( 
	'game.entities.play' 
)
.requires(
	'impact.entity',
    'impact.font'
   
)
.defines(function(){
    
    EntityPlay = ig.Entity.extend({
        size: {x:92,y:86},
        font: new ig.Font( 'media/04b03.font.png' ),
        animSheet: new ig.AnimationSheet('media/play_btn.png', 92,86),
        
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
            ig.game.loadLevel( LevelMenu2 );
        }
        },
        
        draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		//var x = ig.system.width/2,
		//	y = ig.system.height/2;
		
		this.font.draw( 'Play!', 320, 260, ig.Font.ALIGN.CENTER );
        }
     });   
    });