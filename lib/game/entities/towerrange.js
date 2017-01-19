ig.module(
	'game.entities.towerrange'
)
.requires(
	'impact.entity',
	'impact.animation',
	'impact.timer'
)
.defines(function(){
EntityTowerrange = ig.Entity.extend({
		_wmDrawBox:true,
		_wmBoxColor:"rgba(255,0,0,0.5)",
		_wmScalable:true,
		
		size: {x:150,y:50},
	 });
});