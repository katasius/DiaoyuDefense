ig.module(
	'game.entities.ship'
)
.requires(
	'impact.entity'

)
.defines(function(){

    EntityShip = ig.Entity.extend({
        size: {x:137,y:35},
        offset:{x:0,y:35},
        collides: ig.Entity.COLLIDES.PASSIVE,
        type:  ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        gravityFactor:0,
        health:1,
        flip:false,

        animSheet: new ig.AnimationSheet('media/ship_1canon.png', 137,77),

        init: function(x,y,settings){
            this.parent(x,y,settings);
            this.addAnim('idle',1,[0]);

            this.shipSpd=2;
            this.towerSpd = new ig.Timer( this.shipSpd );
            this.shipMoveX = new ig.Timer( 14 );
            this.difficulty=0.25;

            this.vel.x=-50;
            this.currentAnim.flip.x=this.flip;
        },

        update: function() {
            this.parent();
            if(this.shipMoveX.delta() >0){
                this.vel.x=0;
                this.currentAnim.flip.x=true;
                if(this.towerSpd.delta() >0){
                    if(!this.flip){
                        ig.game.spawnEntity( EntityBulletenemiesflip, this.pos.x+120, this.pos.y-10 );
                        }
                    else{
                        ig.game.spawnEntity( EntityBulletenemies, this.pos.x-10, this.pos.y-10 );
                        }
                    this.towerSpd.reset() ;
                }
            }    
        }

     });
    });