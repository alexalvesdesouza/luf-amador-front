var classificacao = angular.module("classificacao", []);
classificacao.controller("classificacaoCtrl", function ($scope, $filter, $http, $interval) {

    $scope.titulo = 'Classificação';
    $scope.headerContent = 'Classificação';
    $scope.classificacoes = [];
    
    const BASE_PATH = "http://localhost:9090/classificacoes";
    //const BASE_PATH = "http://96.126.124.99:9090/classificacoes";

    var carregarClassificacao = function () {
        $http
            .get(BASE_PATH+"/load")
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