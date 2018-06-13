var tjdu = angular.module("tjdu", []);
tjdu.controller("tjduCtrl", function ($scope, $filter, $http) {

    $scope.titulo = 'Classificação';
    $scope.headerContent = 'Classificação';

    $scope.editais = [];
    $scope.resultados = [];
    $scope.portarias = [];
    $scope.tabelaCampeonato = {};
    //const BASE_PATH = "http://localhost:9090/tjdus";
    const BASE_PATH = "http://198.58.119.136:9090/tjdus";

    var carregarEditais = function () {
        $http
            .get(BASE_PATH + '/editais')
            .success(function (ret) {
                $scope.editais = [];
                $scope.editais = ret;
            })
            .error(function (data, status) {
                // Handle HTTP error
                console.log(data);
            });
    };
    var carregarResultados = function () {
        $http
            .get(BASE_PATH + '/resultados')
            .success(function (ret) {
                $scope.resultados = [];
                $scope.resultados = ret;
            })
            .error(function (data, status) {
                // Handle HTTP error
                console.log(data);
            });
    };
    var carregarPortarias = function () {
        $http
            .get(BASE_PATH + '/portarias')
            .success(function (ret) {
                $scope.portarias = [];
                $scope.portarias = ret;
            })
            .error(function (data, status) {
                // Handle HTTP error
                console.log(data);
            });
    };

    carregarEditais();
    carregarResultados();
    carregarPortarias();

});