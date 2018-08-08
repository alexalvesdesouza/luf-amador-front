var tempoReal = angular.module("tempoReal", []);
tempoReal.controller("tempoRealCtrl", function ($scope, $filter, $http, $interval) {

    $scope.titulo = 'Tempo Real';
    $scope.headerContent = 'Tempo Real';

    $scope.tabelaJogosTempoReal = [];
    $scope.tabelaCampeonato = {};
    
    //const BASE_PATH = "http://localhost:9090/jogos";
    const BASE_PATH = "http://96.126.124.99:9090/jogos";

    var carregarTabelasJogos = function () {
        $http
            .get(BASE_PATH + '/tempo-real')
            .success(function (ret) {
                $scope.tabelaJogosTempoReal = [];
                $scope.tabelaJogosTempoReal = ret;
            })
            .error(function (data, status) {

            });
    };

    var updateClock = function () {
        carregarTabelasJogos();
    };
    $interval(updateClock, 5000);

    carregarTabelasJogos();

});