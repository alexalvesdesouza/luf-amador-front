var tempoReal = angular.module("tempoReal", []);
tempoReal.controller("tempoRealCtrl", function ($scope, $filter, $http, $interval) {

    $scope.titulo = 'Tempo Real';
    $scope.headerContent = 'Tempo Real';

    $scope.tabelaJogosTempoReal = [];
    $scope.tabelaCampeonato = {};
    $scope.categoriaSelecionada = '';
    $scope.categoria = 'AMADOR_ESPECIAL';
    
    //const BASE_PATH = "http://localhost:9090/jogos";
    const BASE_PATH = "http://96.126.124.99:9090/jogos";

    var carregarTabelasJogos = function () {
        var cat = $scope.categoria;
        $http
            .get(BASE_PATH + '/tempo-real/' + cat)
            .success(function (ret) {
                $scope.tabelaJogosTempoReal = [];
                $scope.tabelaJogosTempoReal = ret.data;
            })
            .error(function (data, status) {

            });
    };

    $scope.selecionaCategoria = function(cat) {
        $scope.categoria = cat;
        carregarTabelasJogos();
    }

    $scope.selecionaCampeonato = function(value) {
        $scope.categoria = value;
    };

    var updateClock = function () {
        carregarTabelasJogos();
    };
    $interval(updateClock, 5000);

    carregarTabelasJogos();

});