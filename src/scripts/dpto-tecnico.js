var dptoTecnico = angular.module("dptoTecnico", []);
dptoTecnico.controller("dptoTecnicoCtrl", function ($scope, $filter, $http) {

    $scope.titulo = 'Tabela Jogos';
    $scope.headerContent = 'Tabela Jogos';

    $scope.tabelaJogos = [];
    $scope.resultadoJogos = [];
    $scope.categoria = 'AMADOR_ESPECIAL';
    $scope.editais = [];
    $scope.artilhariasDefesas = [];
    $scope.comunicados = [];
    $scope.notasOficiais = [];
    $scope.sumulas = [];
    $scope.artilharia = [];
    $scope.defesa = [];
    $scope.tabelaCampeonato = {};
    // const BASE_PATH_TECNICO = "http://localhost:9090/departamento-tecnico";
    // const BASE_PATH_TABELA = "http://localhost:9090/tabela-jogos";
    // const BASE_PATH_JOGOS = "http://localhost:9090/jogos";
    const BASE_PATH_TABELA = "http://96.126.124.99:9090/tabela-jogos";
    const BASE_PATH_JOGOS = "http://96.126.124.99:9090/jogos";
    const BASE_PATH_TECNICO = "http://96.126.124.99:9090/departamento-tecnico";

    var carregarEditais = function () {
        $http
            .get(BASE_PATH_TECNICO + "/editais")
            .success(function (ret) {
                $scope.editais = [];
                $scope.editais = ret;
            })
            .error(function (data, status) {
                // Handle HTTP error
                console.log(data);
            });
    };

    $scope.selecionaCategoria = function(cat) {
        $scope.categoria = cat;
        carregarResultadoJogos();
    }

    var carregarTabelasJogos = function () {
        $http
            .get(BASE_PATH_TECNICO + "/tabelas-jogos")
            .success(function (ret) {
                $scope.tabelaJogos = [];
                $scope.tabelaJogos = ret;
            })
            .error(function (data, status) {
                // Handle HTTP error
                console.log(data);
            });
    };

    var carregarArtilhariasDefesa = function () {
        $http
            .get(BASE_PATH_TECNICO + "/artilharia-defesa")
            .success(function (ret) {
                $scope.artilhariasDefesas = [];
                $scope.artilhariasDefesas = ret;
            })
            .error(function (data, status) {
                // Handle HTTP error
                console.log(data);
            });
    };

    var carregarComunicados = function () {
        $http
            .get(BASE_PATH_TECNICO + "/comunicados")
            .success(function (ret) {
                $scope.comunicados = [];
                $scope.comunicados = ret;
            })
            .error(function (data, status) {
                // Handle HTTP error
                console.log(data);
            });
    };
    var carregarNotasOficiais = function () {
        $http
            .get(BASE_PATH_TECNICO + "/notas-oficiais")
            .success(function (ret) {
                $scope.notasOficiais = [];
                $scope.notasOficiais = ret;
            })
            .error(function (data, status) {
                // Handle HTTP error
                console.log(data);
            });
    };
    var carregarSumulas = function () {
        $http
            .get(BASE_PATH_TECNICO + "/sumulas")
            .success(function (ret) {
                $scope.sumulas = [];
                $scope.sumulas = ret;
            })
            .error(function (data, status) {
                // Handle HTTP error
                console.log(data);
            });
    };

    var carregarResultadoJogos = function () {
        $http
            .get(BASE_PATH_JOGOS + '/resultados/' + $scope.categoria)
            .success(function (ret) {
                $scope.resultadoJogos = [];
                if (ret.length) {
                    $scope.resultadoJogos = ret;
                }
            })
            .error(function (data, status) {
                // Handle HTTP error
                console.log(data);
            });
    };

    $scope.abaSelecionada = function (abaSelecionada) {
        $scope.abaSelected = abaSelecionada;

        if (abaSelecionada === 'inscricoes') {
            $scope.inscricoesAbertas = true;
            carregarCampeonatos();
        }
    };

    carregarTabelasJogos();
    carregarEditais();
    carregarSumulas();
    carregarComunicados();
    carregarNotasOficiais();
    carregarArtilhariasDefesa();
    carregarResultadoJogos();

});