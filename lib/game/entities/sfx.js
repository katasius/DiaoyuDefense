ig.module( 
	'game.entities.sfx' 
)
.requires(
	'impact.entity'
   
)
.defines(function(){
    
    EntitySfx = ig.Entity.extend({
        size: {x:64,y:58},
        
        animSheet: new ig.AnimationSheet('media/sfx_btn.png', 64,58),
        
        init: function(x,y,settings){
            this.parent(x,y,settings);
            this.addAnim('idle',1,[0]);
            this.addAnim('idle1',1,[1]);
                        
        },
    
        update: function() {
         this.parent();
         
         if(ig.input.pressed('klik') && this.currentAnim == this.anims.idle&& this.isMouseInside()){
            this.currentAnim = this.anims.idle1;}
         else
         if(ig.input.pressed('klik') && this.currentAnim == this.anims.idle1&& this.isMouseInside()){
            this.currentAnim = this.anims.idle;}
        },
     });   
    });