var app = angular.module('shapeApp', []);

var circle = angular.module('circle', ['shapeApp']);
var square = angular.module('square', ['shapeApp']);
var rectangle = angular.module('rectangle', ['shapeApp']);
var triangle = angular.module('triangle', ['shapeApp']);

app.controller('mainController', function($scope) {
    $scope.circles = [];
    $scope.squares = [];
    $scope.rects = [];
    $scope.tris = [];
    
    $scope.totalShapes = function() {
        return $scope.circles.length + $scope.squares.length + $scope.rects.length + $scope.tris.length;
    };
    
    $scope.area = function() {
      // function to be overridden in subclass  
    };
});

app.controller('circleController', function($scope) {
    $scope.radius  = 10;
    $scope.count = 0;
    
    $scope.area = function() {
        return 3.14159 * ($scope.radius * $scope.radius);
    };

    $scope.addCircle = function() {
      if ($scope.count < 10)
      {          
          $scope.$parent.circles.push(this);  
          $scope.count++;        
          appendShapeInfo(document.getElementById("circles"), "Area: " + $scope.area() + ", Radius: " + $scope.radius);
      }
      else
      {
        alert("Max 10 circles reached");   
          document.getElementById("radius_input").disabled = true;
      }
        
    };
});

app.controller('squareController', function($scope) {
    $scope.side  = 10;
    $scope.count = 0;
    
    $scope.area = function() {
        return $scope.side * $scope.side;
    };

    $scope.addSquare = function() {
      if ($scope.count < 10)
      {          
          $scope.$parent.squares.push(this);  
          $scope.count++;        
          appendShapeInfo(document.getElementById("squares"), "Area: " + $scope.area() + ", Side: " + $scope.side);
      }
      else
      {
        alert("Max 10 squares reached");   
          document.getElementById("side_input").disabled = true;
      }
        
    };
});

app.controller('rectController', function($scope) {
    $scope.width = 0;
    $scope.height = 0;
    $scope.count = 0;
    
    $scope.area = function() {
        return $scope.width * $scope.height;
    };

    $scope.addRect = function() {
      if ($scope.count < 10)
      {          
          $scope.$parent.rects.push(this);  
          $scope.count++;        
          appendShapeInfo(document.getElementById("rects"), "Area: " + $scope.area() + ", Width: " + $scope.width + ", Height: " + $scope.height);
      }
      else
      {
        alert("Max 10 rectangles reached");   
          document.getElementById("width_input").disabled = true;
          document.getElementById("height_input").disabled = true;
      }
        
    };
});

app.controller('triController', function($scope) {
    $scope.side1 = 0;
    $scope.side2 = 0;
    $scope.count = 0;
    
    $scope.area = function() {
        return ($scope.side1 * $scope.side2)/2;
    };

    $scope.addTri = function() {
      if ($scope.count < 10)
      {          
          $scope.$parent.tris.push(this);  
          $scope.count++;        
          appendShapeInfo(document.getElementById("tris"), "Area: " + $scope.area() + ", Side1: " + $scope.side1 + ", Side2: " + $scope.side2);
      }
      else
      {
        alert("Max 10 triangles reached");   
          document.getElementById("side1_input").disabled = true;
          document.getElementById("side2_input").disabled = true;
      }
        
    };
});

function appendShapeInfo(parent, text)
{
    var newElement = document.createElement("div");
    var node = document.createTextNode(text);
    newElement.appendChild(node);
    parent.appendChild(newElement);
}