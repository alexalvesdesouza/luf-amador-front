var dptoArbitros = angular.module("dptoArbitros", []);
dptoArbitros.controller("dptoArbitrosCtrl", function ($scope, $filter, $http) {

    $scope.titulo = 'Classificação';
    $scope.headerContent = 'Classificação';

    // const BASE_PATH = "http://localhost:9090/escalas";
    // const BASE_PATH_ARBITROS = "http://localhost:9090/arbitros/load";
    const BASE_PATH_ARBITROS = "http://96.126.124.99:9090/arbitros/load";
    const BASE_PATH = "http://96.126.124.99:9090/escalas";

    $scope.escalas = [];
    $scope.escalaSelecionado = {};
    $scope.salvarEscala = {};
    $scope.arbitros = [];

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

    var carregarArbitros = function () {
        $http
            .get(BASE_PATH_ARBITROS)
            .success(function (ret) {
                $scope.arbitros = [];
                $scope.arbitros = ret;
            })
            .error(function (data, status) {

            });
    };

    carregarEscalas();
    carregarArbitros();

});