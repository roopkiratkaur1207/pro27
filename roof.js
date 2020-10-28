class ROOF{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,400,20,options);
        this.width = 400;
        this.height = 10;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        strokeWeight(1);
        fill("black");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}