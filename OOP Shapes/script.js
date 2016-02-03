
// Super class Shape
function Shape(){
	Shape.count++;
	this.area = function() {};
}
Shape.count = 0;

    
// Circle Prototype
function Circle(radius){
	Shape.call(this);
	this.radius = radius;
    this.area = function() {return (radius*radius)*3.14159;};
    Circle.count++;
    Circle.canAdd = function() {if (Circle.count >= 10) return false; else return true;};
}
Circle.prototype = Object.create(Shape.prototype);
Circle.count = 0;

    
// Square prototype
function Square(side){
	Shape.call(this);
	this.side = side;
    this.area = function() {return side*side;};
    Square.count++;
    Square.canAdd = function() {if (Square.count >= 10) return false; else return true;};
}
Square.prototype = Object.create(Shape.prototype);
Square.count = 0;
    
    
// Rectangle prototype
function Rectange(length, width){
	Shape.call(this);
	this.length = length;
    this.width = width;
    this.area = function() {return length*width;};
    Rectange.count++;
    Rectange.canAdd = function() {if (Rectange.count >= 10) return false; else return true;};
}
Rectange.prototype = Object.create(Shape.prototype);
Rectange.count = 0;

// triangle prototype
function Triangle(side1, side2){
	Shape.call(this);
	this.side1 = side1;    
    this.side2 = side2;
    this.area = function() {return (side1*side2)/2;};
    Triangle.count++;    
    Triangle.canAdd = function() {if (Triangle.count >= 10) return false; else return true;};
}
Triangle.prototype = Object.create(Shape.prototype);
Triangle.count = 0;


var circles = [];
var squares = [];
var rectangles = [];
var triangles = [];
    


function addCircle()
{
    // get specs
    var radiusInput = document.getElementById('radius');
    var radius = radiusInput.value;
    radiusInput.value = "";
    if (radius == "")
        radius = 0;
    
    // create object
    if (circles.length < 1)
        circles.push(new Circle(radius));
    else if (Circle.canAdd())
        circles.push(new Circle(radius));
                 
    // Update UI
    var element = document.getElementById("circles");
    var text = "<p>";
    for (i = 0; i < circles.length; i++) {
        text += "Radius: " + circles[i].radius + "<br>Area: " + circles[i].area() + "<p>";
    }
    element.innerHTML = "<h4>Circle Count: "+Circle.count+"</h4><p>" + text;
    updateTotalCountUI();
}
    
function addSquare()
{
    // get specs
    var side = document.getElementById('side').value;
    document.getElementById('side').value = "";
    
    if (side == "")
        side = 0;

    // create object
    if (squares.length < 1)
        squares.push(new Square(side));
    else if (Square.canAdd())
        squares.push(new Square(side));

    var element = document.getElementById("squares");
    var text = "<p>";
    for (i = 0; i < squares.length; i++) {
        text += "side: " + squares[i].side + "<br>Area: " + squares[i].area() + "<p>";
    }
    element.innerHTML = "<h4>Square Count: "+Square.count+"</h4><p>" + text;
    updateTotalCountUI();
}
    
function addRectangle()
{
    // get specs
    var length = document.getElementById('length').value;
    document.getElementById('length').value = "";
    var width = document.getElementById('width').value;
    document.getElementById('width').value = "";
    if (length == "")
        length = 0;
    if (width == "")
        width = 0;

    // create object
    if (rectangles.length < 1)
        rectangles.push(new Rectange(length, width));
    else if (Rectange.canAdd())
        rectangles.push(new Rectange(length, width));

    // update UI
    var element = document.getElementById("rectangles");
    var text = "<p>";
    for (i = 0; i < rectangles.length; i++) {
        text += "Length: " + rectangles[i].length + "<br>Width: "+rectangles[i].width+"<br>Area: " + rectangles[i].area() + "<p>";
    }
    element.innerHTML = "<h4>Rectangle Count: "+Rectange.count+"</h4><p>" + text;
    updateTotalCountUI();
}
    
function addTriangle()
{
    // get specs
    var side1 = document.getElementById('side1').value;
    var side2 = document.getElementById('side2').value;
    document.getElementById('side1').value = "";
    document.getElementById('side2').value = "";
    if (side1 == "")
        side1 = 0;
    if (side2 == "")
        side2 = 0;
        
    // create object
    if (triangles.length < 1)
        triangles.push(new Triangle(side1, side2));
    else if (Triangle.canAdd())
        triangles.push(new Triangle(side1, side2));

    // update UI
    var element = document.getElementById("triangles");
    var text = "<p>";
    for (i = 0; i < triangles.length; i++) {
        text += "Side: " + triangles[i].side1 + "<br>Side: " + triangles[i].side2 + "<br>Area: " + triangles[i].area() + "<p>";
    }
    element.innerHTML = "<h4>Triangle Count: "+Triangle.count+"</h4><p>" + text;
    updateTotalCountUI();
}
    
function updateTotalCountUI()
{
    var element = document.getElementById('total');
    element.innerHTML = "<h3>Total Shapes: "+Shape.count+"</h3>";
}
