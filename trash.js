class Ball{
    constructor(x, y, r){
        var options = {
            
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        
        this.x = x;
        this.y = y;
        this.r = r;
        this.paperImg = loadImage("haha papar goes brrrr.png")
        this.body = Bodies.circle(x, y, r/2, options);

        World.add(world, this.body);
    }

      
        display(){
		    var paperpos=this.body.position;		

		    push()
            translate(paperpos.x, paperpos.y);
		    rectMode(CENTER)
            ellipse(0,0,this.r, this.r);
            image(this.paperImg, -30, -30, 60, 60);
		    pop()
			
	}
    
}