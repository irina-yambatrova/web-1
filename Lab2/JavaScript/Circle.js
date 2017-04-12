function Circle(){
}

Circle.prototype=Object.create(Shape.prototype);

Circle.prototype.x=0;
Circle.prototype.y=0;
Circle.prototype.radius=0;

Circle.prototype.getRadius=function (){
    return this.radius;
}
Circle.prototype.setRadius=function(value){
    this.radius=value;
}

Circle.prototype.getX=function(){
    return this.x;
}
Circle.prototype.setX=function(value){
    this.x = value;
}

Circle.prototype.getY=function(){
    return this.y;
}
Circle.prototype.setY=function(value){
    this.y=value;
}

Circle.prototype.calculateArea=function (){
    return (Math.PI*Math.pow(this.radius,2));
}

Circle.prototype.calculatePerimeter=function (){
    return (2*Math.PI*this.radius);
}

Circle.prototype.draw = function(canvas){
    //TODO
}