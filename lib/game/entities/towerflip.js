ig.module(
	'game.entities.towerflip'
)
.requires(
	'impact.entity',
	'impact.animation',
	'impact.timer'
)
.defines(function(){

	EntityTowerflip = ig.Entity.extend({
		size: {x:50,y:50},
		offset: {x: 50, y: 50},
		gravityFactor:0,

		animSheet: new ig.AnimationSheet('media/island_canon.png', 140,100),

		init: function(x,y,settings){
			this.parent(x,y,settings);

			this.addAnim('idle',0.5,[0,0,1,2]);
			this.towerSpd = new ig.Timer( 2 );

			this.currentAnim.flip.x=true;
		},

		update: function() {
		   this.parent();
			this.currentAnim.update();

			if (this.towerSpd !==null){
				if(this.towerSpd.delta() >0 ){
					ig.game.spawnEntity( EntityBulletflip, this.pos.x-45, this.pos.y-20 );
					this.towerSpd.reset() ;
			 }

			}
		}
	 });
	});

