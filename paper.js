class Pp{
constructor(x,y){
   var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2


   }
 
this.body=Bodies.circle(x,y,40,options)
 
 this.radius=40
 

World.add(world,this.body)


}
display(){
    fill("red")
var pos=this.body.position
ellipse(pos.x,pos.y,this.radius)




}




}