ig.module(
	'game.entities.ship3'
)
.requires(
	'impact.entity'

)
.defines(function(){

    EntityShip3 = ig.Entity.extend({
        size: {x:122,y:35},
        offset:{x:0,y:35},
        collides: ig.Entity.COLLIDES.PASSIVE,
        type:  ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        gravityFactor:0,
        health:1,
        flip:false,
        

        animSheet: new ig.AnimationSheet('media/ship_3canon.png', 122,73),

        init: function(x,y,settings){
            this.parent(x,y,settings);
            this.addAnim('idle',1,[0]);

            this.shipSpd=2;
            this.towerSpd = new ig.Timer( this.shipSpd );
            this.shipMoveX = new ig.Timer( 13 );
            this.wave2=false;    
            this.difficulty=0.25;
            this.vel.x=-50;
        },

        update: function() {
            this.parent();
            if(this.shipMoveX.delta() >0){
                this.vel.x=0;
                this.currentAnim.flip.x=true;
                if(this.wave2===true){
                if(this.towerSpd.delta() >0){
                    ig.game.spawnEntity( EntityBulletenemiesflip, this.pos.x+10, this.pos.y-10 );
                    this.towerSpd.reset() ;
                }
                }
            }    
        }

     });
    });