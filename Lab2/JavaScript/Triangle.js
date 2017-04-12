function Triangle(){
}

Triangle.prototype=Object.create(Shape.prototype);

Triangle.prototype.x1=0;
Triangle.prototype.y1=0;
Triangle.prototype.x2=0;
Triangle.prototype.y2=0;
Triangle.prototype.x3=0;
Triangle.prototype.y3=0;

Triangle.prototype.getX1=function(){
    return this.x1
}
Triangle.prototype.setX1=function(value){
    this.x1=value;
}

Triangle.prototype.getX2=function(){
    return this.x2
}
Triangle.prototype.setX2=function(value){
    this.x2=value;
}

Triangle.prototype.getX3=function(){
    return this.x3
}
Triangle.prototype.setX3=function(value){
    this.x3=value;
}

Triangle.prototype.getY1=function(){
    return this.y1
}
Triangle.prototype.setY1=function(value){
    this.y1=value;
}

Triangle.prototype.getY2=function(){
    return this.y2
}
Triangle.prototype.setY2=function(value){
    this.y2=value;
}

Triangle.prototype.getY3=function(){
    return this.y3
}
Triangle.prototype.setY3=function(value){
    this.y3=value;
}

Triangle.prototype.calculateArea=function (){
    square = Math.abs((this.x1 - this.x3)*(this.y2 - this.y3) - (this.x2 - this.x3)*(this.y1 - this.y3)) * 0.5;
    return square;
}

Triangle.prototype.calculatePerimeter=function (){
    lengthFirst = Math.sqrt(Math.pow(Math.abs(this.x1 - this.x2),2) + Math.pow(Math.abs(this.y1 - this.y2),2));
    lengthSecond = Math.sqrt(Math.pow(Math.abs(this.x1 - this.x3),2) + Math.pow(Math.abs(this.y1 - this.y3),2));
    lengthThird = Math.sqrt(Math.pow(Math.abs(this.x2 - this.x3),2) + Math.pow(Math.abs(this.y2 - this.y3),2));
    return (lengthFirst + lengthSecond + lengthThird);
}

Triangle.prototype.draw =function(canvas){
    //TODO
}