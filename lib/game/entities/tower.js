ig.module(
	'game.entities.tower'
)
.requires(
	'impact.entity',
	'impact.animation',
	'impact.timer'
)
.defines(function(){

	EntityTower = ig.Entity.extend({
		_wmDrawBox:true,
		_wmBoxColor:"rgba(255,0,0,0.5)",
		_wmScalable:true,
		name:"d1",
		size: {x:50,y:50},
		offset: {x: 50, y: 50},
		gravityFactor:0,

		animSheet: new ig.AnimationSheet('media/island_canon.png', 140,100),

		init: function(x,y,settings){
			this.parent(x,y,settings);

			this.addAnim('idle',0.5,[0,0,1,2]);
			this.towerSpd = new ig.Timer( 2 );

			this.currentAnim.flip.x=this.flip;
		},

		update: function() {
		   this.parent();
			this.currentAnim.update();

			if (this.towerSpd !==null){
				if(this.towerSpd.delta() >0 ){
					ig.game.spawnEntity( EntityBullet, this.pos.x+45, this.pos.y-20 );
					this.towerSpd.reset() ;
			 }

			}
		}
	 });
	});

