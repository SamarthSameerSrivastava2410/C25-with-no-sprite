class Side{
    constructor(x, y, width, height){
     var options = {
        isStatic:true
     }

     this.x = x;
     this.y = y;
     this.width = width;
     this.height = height;
     this.body = Bodies.rectangle(x, y, width, height, options);
     World.add(world, this.body);
    }

    display(){

    var rectpos = this.body.position;		

	push()
	translate(rectpos.x, rectpos.y);
	rectMode(CENTER)
	fill(255,0,0)
    rect(0, 0, this.width, this.height);
    pop()



    }


}