ig.module(
	'game.entities.ship2flip'
)
.requires(
	'impact.entity'

)
.defines(function(){

    EntityShip2flip = ig.Entity.extend({
        size: {x:130,y:50},
        offset:{x:10,y:50},
        collides: ig.Entity.COLLIDES.PASSIVE,
        type:  ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        gravityFactor:0,
        health:1,
        flip:true,
        

        animSheet: new ig.AnimationSheet('media/ship_2flip.png', 137,100),

        init: function(x,y,settings){
            this.parent(x,y,settings);
            this.addAnim('idle',1,[0]);

            this.towerSpd = new ig.Timer( 2 );
            this.shipMoveX = new ig.Timer( 13 );
               
            this.difficulty=0.25;
           
            //this.currentAnim.flip.x=this.flip;
        },

        update: function() {
            this.parent();
            
                this.vel.x=50;
                if(this.shipMoveX.delta() >0){
                    this.vel.x=0;
                    this.currentAnim.flip.x=true;
                    if(this.towerSpd.delta() >0){
                        ig.game.spawnEntity( EntityBulletenemies, this.pos.x+10, this.pos.y-10 );
                        this.towerSpd.reset() ;
                    }
                }
                
        }

     });
    });