ig.module( 
	'game.entities.island' 
)
.requires(
	'impact.entity',
    'impact.font'
)
.defines(function(){
    
    EntityIsland = ig.Entity.extend({
        size: {x:180,y:250},
        offset: {x: 100, y: 70},
        font: new ig.Font( 'media/font_04b03_black_16.png' ),
        type: ig.Entity.TYPE.A,
        gravityFactor:0,
        health:6,
        index : 0,
        towerPossibilities : new Array('0','1','2','3','4'),
        animSheet: new ig.AnimationSheet('media/island.png', 400,363),
        
        init: function(x,y,settings){
            this.parent(x,y,settings);
            this.addAnim('idle',1,[0]);
            this.addAnim('idle1',1,[1]);
            this.addAnim('idle2',1,[2]);
            this.addAnim('idle3',1,[3]);
            this.addAnim('idle4',1,[4]);
            this.addAnim('blink1',0.1,[5,1,5,1]);
            this.addAnim('blink2',0.1,[5,2,5,2]);
            this.addAnim('blink3',0.1,[5,3,5,3]);
            this.addAnim('blink4',0.1,[5,4,5,4]);
            this.addAnim('idle5',1,[5]);
            this.score = new ig.Timer();
            this.blink = new ig.Timer();
            
        },
        
        update: function() {
         // Update all entities and backgroundMaps
		this.parent();
        
		 if( ig.input.pressed('klik')&&this.isMouseInside()&&ig.game.money>=100){
            ig.game.money-=100;
            this.index++;
                if(this.towerPossibilities[this.index] === '1') {
					this.pos1();
				}else if(this.towerPossibilities[this.index] === '2'){
					this.pos2();
				}else if(this.towerPossibilities[this.index] === '3'){
					this.pos3();
				}else if(this.towerPossibilities[this.index] === '4'){
					this.pos4();
				}
        }
        
        if(this.health==5){
            this.blink.set=0.5;
            if(this.blink.delta()>0){
            this.currentAnim = this.anims.blink1;
            this.currentAnim.update();}
            this.currentAnim = this.anims.idle1;
        }else
        if(this.health==4){
            this.currentAnim = this.anims.idle2;}else
        if(this.health==3){
            this.currentAnim = this.anims.idle3;}else
        if(this.health==2){
            this.currentAnim = this.anims.idle4;}else
        if(this.health==1){
            this.currentAnim = this.anims.idle5;}
        
            
        if( ig.input.pressed('right')){
         this.receiveDamage(1);
         
         ig.log(this.score);
        }
        
        this.totalscore = this.score.delta()+10*ig.game.kills;
        if(this.totalscore>ig.game.hiscore){
            ig.game.hiscore=this.totalscore;
        }
        //ig.log(this.health);
        //ig.log(this.totalscore);
	},
    
    draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
            
        
//		this.font.draw( this.health.round()-1, 29, 25, ig.Font.ALIGN.LEFT );
//        this.font.draw( 'Money: '+ig.game.money.round(), 10, 70, ig.Font.ALIGN.LEFT );
//		this.font.draw( 'Score: '+this.totalscore.round(), 260, 30, ig.Font.ALIGN.LEFT );
//        this.font.draw( 'HiScore: '+ig.game.hiscore.round(), 260, 10, ig.Font.ALIGN.LEFT );
        },
        
    pos1:function(){
            ig.game.spawnEntity( EntityTower, 380, 170 );
        },
    pos2:function(){
            ig.game.spawnEntity( EntityTowerflip, 250, 250 );
        },
    pos3:function(){
            ig.game.spawnEntity( EntityTower, 330, 100 );
        },
    pos4:function(){
            ig.game.spawnEntity( EntityTowerflip, 250, 320);
        },
     });   
    });