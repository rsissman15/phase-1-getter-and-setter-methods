// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius=radius
    }
    get diameter(){
        //console.log(`${this.radius}`*2);
        return(`${this.radius}`*2);
    }
    get circumference(){
        //console.log(`${this.diameter}`*Math.PI)
        return (`${this.diameter}`*Math.PI)
    }
    get area(){
        //console.log((`${this.radius}`*`${this.radius}`)*Math.PI)
        return((`${this.radius}`*`${this.radius}`)*Math.PI)
    }
    set diameter(newDiameter){
        this.radius=newDiameter/2;
        console.log(this.radius);
    }
    set circumference(newCircuference){
        this.radius=(newCircuference/2)/Math.PI;
        console.log(this.radius)
    }
    set area(newArea){
        this.radius=(Math.sqrt(newArea/Math.PI))
        console.log(this.radius)
    }
}

let circle=new Circle(6);
circle.area=200;
circle.radius;