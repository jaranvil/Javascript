var app = angular.module('shapeApp', []);

app.controller('mainController', function($scope) {
    $scope.circles = [];
    $scope.circleCount = 1;
    $scope.displayCircles = function() {
        return $scope.circles.length;
    };
});

app.controller('circleController', function($scope) {
    $scope.radius  = 10;
    
    $scope.area = function() {
        return 3.14159 * ($scope.radius * $scope.radius);
    };

    $scope.addCircle = function() {
      $scope.test = $scope.$parent.circles.push(this);  
    };
});