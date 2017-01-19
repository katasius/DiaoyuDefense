ig.module(
	'game.entities.spawnship'
)
.requires(
	'impact.entity'

)
.defines(function(){

    EntitySpawnship = ig.Entity.extend({
        size: {x:137,y:77},
        gravityFactor:0,
        
        animSheet: new ig.AnimationSheet('media/ship_1.png', 137,77),

        init: function(x,y,settings){
            this.parent(x,y,settings);
            this.addAnim('idle',1,[0]);

            this.spawntime=13;
            this.difficulty=1;
            this.SpawnTime = new ig.Timer(this.spawntime);
        },

        update: function() {
            this.parent();
                if(this.SpawnTime.delta() >0){
                    ig.game.spawnEntity( EntityShip, this.pos.x, this.pos.y );
                    this.SpawnTime.reset() ;
                }
            }    
        

     });
    });