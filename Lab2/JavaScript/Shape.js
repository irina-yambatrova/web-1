function Shape(){
    return this;
}

Shape.prototype.borderColor="#000000";
Shape.prototype.fillColor="#F2F2F2";

Shape.prototype.setFillColor=function (value){
    this.fillColor = value;
};

Shape.prototype.getFillColor=function (){
    return this.fillColor;
};

Shape.prototype.setBorderColor=function (value){
    this.borderColor=value;
};

Shape.prototype.getBorderColor=function (){
    return this.borderColor;
};