ig.module(
	'game.entities.spawnship2flip'
)
.requires(
	'impact.entity'

)
.defines(function(){

    EntitySpawnship2flip = ig.Entity.extend({
        size: {x:137,y:77},
        gravityFactor:0,
        
        animSheet: new ig.AnimationSheet('media/ship_2flip.png', 137,77),

        init: function(x,y,settings){
            this.parent(x,y,settings);
            this.addAnim('idle',1,[0]);
            this.wave2=false; 
            this.spawntime=13;
            this.difficulty=1;
            this.SpawnTime = new ig.Timer(this.spawntime);
        },

        update: function() {
            this.parent();
            if(this.wave2===true){
                if(this.SpawnTime.delta() >0){
                    ig.game.spawnEntity( EntityShip2flip, this.pos.x, this.pos.y );
                    this.SpawnTime.reset() ;
                }
            }
        }        

     });
    });