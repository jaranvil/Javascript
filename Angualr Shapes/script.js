var app = angular.module('shapeApp', []);

app.controller('mainController', function($scope) {
    $scope.circles = [];
    
    $scope.displayCircles = function() {
        return $scope.circles.length;
    };
    
    $scope.totalShapes = function() {
        return $scope.circles.length;
    };
});

app.controller('circleController', function($scope) {
    $scope.radius  = 10;
    
    $scope.area = function() {
        return 3.14159 * ($scope.radius * $scope.radius);
    };

    $scope.addCircle = function() {
      $scope.$parent.circles.push(this);  
    };
});