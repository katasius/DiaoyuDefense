ig.module( 
	'game.entities.bulletenemies' 
)
.requires(
	'impact.entity',
    'impact.entity-pool',
    'impact.timer'
   
)
.defines(function(){
    
    EntityBulletenemies = ig.Entity.extend({
        size: {x:54,y:44},
        collides: ig.Entity.COLLIDES.PASSIVE,
        type:  ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        health:1,
        
        animSheet: new ig.AnimationSheet('media/ship_1_canon.png', 54,44),
        
        init: function(x,y,settings){
            this.parent(x,y,settings);
            this.addAnim('idle',0.2,[0,1,2,3,4,5]);
            this.maxVel.x=-50;
            this.vel.x = (settings.flip ? -this.maxVel.x : this.maxVel.x);
            this.vel.y = -50;
            
        },
        
    update: function() {
               this.parent();
                },
        check:  function(other) {
        other.receiveDamage(1,this);
        ig.game.spawnEntity( EntityExplosion, this.pos.x, this.pos.y );
		this.kill();
	},
    
        reset: function( x, y, settings ) {
        this.parent( x, y, settings );
       
        
        this.maxVel.x=-50;
        this.vel.x = (settings.flip ? -this.maxVel.x : this.maxVel.x);
        this.vel.y = -50;
        
    }
            
     });
    
    // Enable Pooling!
ig.EntityPool.enableFor( EntityBulletenemies );

});