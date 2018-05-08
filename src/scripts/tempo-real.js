var tempoReal = angular.module("tempoReal", []);
tempoReal.controller("tempoRealCtrl", function ($scope, $filter, $http) {

    $scope.titulo = 'Tempo Real';
    $scope.headerContent = 'Tempo Real';

    $scope.tabelaJogos = [];
    $scope.tabelaCampeonato = {};
    const BASE_PATH = "http://localhost:9090/tabela-jogos";

    var carregarTabelasJogos = function () {
        $http
            .get(BASE_PATH)
            .success(function (ret) {
                $scope.tabelaJogos = [];
                $scope.tabelaJogos = ret[0].jogos;
            })
            .error(function (data, status) {

            });
    };

    carregarTabelasJogos();

});