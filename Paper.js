class Paper {
    constructor(x,y,radius) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            'isStatic':false     
        }

        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
        this.radius = 70;
        this.image = loadImage("Sprites/paper.png");
    }

    display() {
       imageMode(CENTER);
       image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}