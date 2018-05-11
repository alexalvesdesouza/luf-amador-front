var dptoTecnico = angular.module("dptoTecnico", []);
dptoTecnico.controller("dptoTecnicoCtrl", function ($scope, $filter, $http) {

    $scope.titulo = 'Tabela Jogos';
    $scope.headerContent = 'Tabela Jogos';

    $scope.tabelaJogos = [];
    $scope.tabelaCampeonato = {};
    const BASE_PATH = "/tabela-jogos";
    //const BASE_PATH = "http://198.58.119.136:9090/tabela-jogos";

    var carregarTabelasJogos = function () {
        $http
            .get(BASE_PATH)
            .success(function (ret) {
                $scope.tabelaJogos = [];
                $scope.tabelaJogos = ret[0].jogos;
            })
            .error(function (data, status) {
                // Handle HTTP error
                console.log(data);
            });


    };

    carregarTabelasJogos();

});