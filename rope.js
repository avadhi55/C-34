class Rope {
    constructor(bodyA,pointB){
        var options = {
            stiffness:1.2,
            length:250,
            bodyA : bodyA,
            pointB : pointB

        }
        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope);

   }
   display(){
       if(this.rope.bodyA){
           strokeWeight(3)
           line(this.rope.pointB.x,this.rope.pointB.y,this.rope.bodyA.position.x,this.rope.bodyA.position.y);

       }
   }
   fly(){
      this.rope.bodyA = null;
   }
}
