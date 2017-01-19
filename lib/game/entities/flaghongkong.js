ig.module( 
	'game.entities.flaghongkong' 
)
.requires(
	'impact.entity'
   
)
.defines(function(){
    
    EntityFlaghongkong = ig.Entity.extend({
        size: {x:146,y:100},
        
        animSheet: new ig.AnimationSheet('media/flag_hong_kong.png', 146,100),
        
        init: function(x,y,settings){
            this.parent(x,y,settings);
            this.addAnim('idle',1,[0]);
                        
        },
    
        update: function() {
         this.parent();
         
         if(ig.input.pressed('klik') && this.isMouseInside()){
            ig.game.flag='hong_kong';
            ig.game.loadLevel( LevelMain );
            
            }
        
        },
     });   
    });