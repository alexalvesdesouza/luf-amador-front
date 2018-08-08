var app = angular.module("app", []);

app.controller("appCtrl", function ($scope, $filter, $http, $interval) {

    $scope.titulo = 'Index';
    $scope.headerContent = 'Index';
    $scope.contador = 0;
    $scope.clock = new Date();

    $scope.paginaSelecionada = function(headerContent) {
        $scope.headerContent = headerContent;        
    };

    // var updateClock = function() {
    //     $scope.clock = new Date();
    //     // alert($scope.clock);
    // };

    // $interval(updateClock, 1000);

});

