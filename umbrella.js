class umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.radius= 50;
        this.image=loadImage("walking_1.png");
        this.umbrella=Bodies.circle(x, y,this.radius, options)
        World.add(world, this.umbrella);
    }
    display()
	{	
     imageMode(CENTER);
     ellipseMode(RADIUS)
     image(this.image,this.umbrella.position.x,this.umbrella.position.y+70,300,300);
			
	}

}