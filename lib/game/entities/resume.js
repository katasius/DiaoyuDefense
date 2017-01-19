ig.module( 
	'game.entities.resume' 
)
.requires(
	'impact.entity'
   
)
.defines(function(){
    
    EntityResume = ig.Entity.extend({
        size: {x:92,y:86},
        
        animSheet: new ig.AnimationSheet('media/resume_btn.png', 92,86),
        
        init: function(x,y,settings){
            this.parent(x,y,settings);
            this.addAnim('idle',1,[0]);
                        
        },
    
     });   
    });