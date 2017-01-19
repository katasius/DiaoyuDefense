ig.module( 
	'game.entities.flagtaiwan' 
)
.requires(
	'impact.entity'
   
)
.defines(function(){
    
    EntityFlagtaiwan = ig.Entity.extend({
        size: {x:146,y:100},
        
        animSheet: new ig.AnimationSheet('media/flag_taiwan.png', 146,100),
        
        init: function(x,y,settings){
            this.parent(x,y,settings);
            this.addAnim('idle',1,[0]);
                        
        },
    
        update: function() {
         this.parent();
         
         if(ig.input.pressed('klik') && this.isMouseInside()){
            ig.game.flag='taiwan';
            ig.game.loadLevel( LevelMain );
            
            }
        
        },
     });   
    });