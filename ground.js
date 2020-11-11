class Ground{
  constructor(x,y) {
      var options = {
          isStatic: true
  }
  
      this.width = 1600;
      this.height = 20;
      this.body = Bodies.rectangle(x,y,this.width,this.height,options);
      World.add(world, this.body);

    }
    display(){
      var pos = this.body.position;
     
      rectMode(CENTER);
      fill("orange");
      rect(pos.x,pos.y, this.width, this.height);
     
    }

  
}