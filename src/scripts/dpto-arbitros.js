var dptoArbitros = angular.module("dptoArbitros", []);
dptoArbitros.controller("dptoArbitrosCtrl", function ($scope, $filter, $http) {

    $scope.titulo = 'Classificação';
    $scope.headerContent = 'Classificação';

    const BASE_PATH = "/escalas";
    //const BASE_PATH = "http://198.58.119.136:9090/escalas";

    $scope.escalas = [];
    $scope.escalaSelecionado = {};
    $scope.salvarEscala = {};

    var carregarEscalas = function () {
        $http
            .get(BASE_PATH)
            .success(function (ret) {
                $scope.escalas = [];
                $scope.escalas = ret;
            })
            .error(function (data, status) {

            });
    };

    carregarEscalas();

});