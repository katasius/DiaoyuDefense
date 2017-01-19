ig.module( 
	'game.entities.explosion' 
)
.requires(
    'impact.animation',
    'impact.timer',
	'impact.entity'
   
)
.defines(function(){
    
    EntityExplosion = ig.Entity.extend({
        size: {x:45,y:40},
        offset:{x:100,y:200},
        
        animSheet: new ig.AnimationSheet('media/explosion.png', 325,240),
        
        init: function(x,y,settings){
            this.parent(x,y,settings);
            this.addAnim('idle',0.2,[0,1,2,3,4,5],true);
            this.timer = new ig.Timer(0.5);
        },
        
        update: function(){
            this.currentAnim.update();
            if (this.timer.delta() > 0) {
                 this.kill();
            }   
        }
});
});