var classificacao = angular.module("classificacao", []);
classificacao.controller("classificacaoCtrl", function ($scope, $filter, $http, $interval) {

    $scope.titulo = 'Classificação';
    $scope.headerContent = 'Classificação';
    $scope.classificacoes = [];
    
    const BASE_PATH = "/classificacoes";
    //const BASE_PATH = "http://198.58.119.136:9090/classificacoes";

    var carregarClassificacao = function () {
        $http
            .get(BASE_PATH)
            .success(function (ret) {
                $scope.classificacoes = [];
                $scope.classificacoes = ret;
            })
            .error(function (data, status) {
               
            });
    };

    var updateClock = function () {
        carregarClassificacao();
    };

    $interval(updateClock, 5000);

    carregarClassificacao();

});