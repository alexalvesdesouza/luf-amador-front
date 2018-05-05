var classificacao = angular.module("classificacao", []);
classificacao.controller("classificacaoCtrl", function ($scope, $filter, $http) {

    $scope.titulo = 'Classificação';
    $scope.headerContent = 'Classificação';
    $scope.classificacoes = [];

    var carregarClassificacao = function () {
        $http
            .get("http://198.58.119.136:9091/classificacoes/list")
            .success(function (ret) {
                $scope.classificacoes = [];
                $scope.classificacoes = ret;
            })
            .error(function (data, status) {
                // Handle HTTP error
                console.log(data);
            });


    };

    carregarClassificacao();

});