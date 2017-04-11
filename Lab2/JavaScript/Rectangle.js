function Rectangle(){
}

Rectangle.prototype=Object.create(Shape.prototype);

Rectangle.prototype.x=0;
Rectangle.prototype.y=0;
Rectangle.prototype.width=0;
Rectangle.prototype.heigh =0;


Rectangle.prototype.getX=function (){
    return this.x;
}

Rectangle.prototype.setX=function (value){
    this.x=value;
}

Rectangle.prototype.getY=function (){
    return this.Y;
}

Rectangle.prototype.setY=function (value){
    this.y = value;
}

Rectangle.prototype.getWidth=function (){
    return this.Width;
}
Rectangle.prototype.setWidth=function (value){
    this.width=value;
}

Rectangle.prototype.getHeight=function (){
    return this.height;
}
Rectangle.prototype.setHeight=function (value){
    this.height=value;
}

Rectangle.prototype.calculateArea=function (){
    //TODO
}

Rectangle.prototype.calculatePerimeter=function (){
    //TODO
}

Rectangle.prototype.draw = function (canvas){
    //TODO
}