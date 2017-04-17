var app = angular.module('app', ['ngRoute', 'dndLists']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/boards.html',
      controller: 'boardsCtrl'
    })
    .when('/boards/:boardId', {
      templateUrl: 'templates/board.html',
      controller: 'boardCtrl'
    })
    .otherwise({
      template: '404 no such page'
    });

}]);

app.controller("SimpleDemoController", function($scope) {

    $scope.models = {
        selected: null,
        lists: {"A": [], "B": []}
    };

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
        $scope.models.lists.A.push({label: "Item A" + i});
        $scope.models.lists.B.push({label: "Item B" + i});
    }

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

});
