class bob{
    constructor(x,y){
    var options = {
        isStatic : false,
        'restitution' : 0.6,
        'density' : 1.5,
        'fricition' : 10.0
    }
    this.body = Bodies.rectangle(x,y,50,50,options);
    this.width = 50;
    this.height = 50;

    World.add(world,this.body);
}
display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipseMode(CENTER);
    stroke("silver");
    fill("silver");
    ellipse(0,0,this.width,this.height);
    pop();
}
}