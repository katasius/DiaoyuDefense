ig.module( 
	'game.entities.bullet' 
)
.requires(
    'game.entities.explosion' ,
	'impact.entity',
    'impact.timer'
   
)
.defines(function(){
    
    EntityBullet = ig.Entity.extend({
        size: {x:25,y:25},
        collides: ig.Entity.COLLIDES.PASSIVE,
        checkAgainst: ig.Entity.TYPE.B,
        health:1,
        
        animSheet: new ig.AnimationSheet('media/canon_ball.png', 25,25),
        
        init: function(x,y,settings){
            this.parent(x,y,settings);
            this.addAnim('idle',0.2,[0,1,2,3,4,5]);
            this.timer = new ig.Timer(1);
            this.timer2 = new ig.Timer(1);
            this.speed = 25;
            
        },
        

        check:  function(other) {
        other.receiveDamage(1,this);
        ig.game.kills++;
        ig.game.money+=10;
        ig.game.spawnEntity( EntityExplosion, this.pos.x, this.pos.y );
		this.kill();
        },
        
        update: function() {
		   this.parent();
                    
            this.vel.x = this.speed;
            this.vel.y = -2*this.speed;  
            if (this.timer.delta() > 0) {
                this.vel.y = 2*this.speed;  
            }
            if(this.pos.y>500){
                this.kill();
            }
        }
    
            
     });
});