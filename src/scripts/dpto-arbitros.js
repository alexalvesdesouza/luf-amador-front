var dptoArbitros = angular.module("dptoArbitros", []);
dptoArbitros.controller("dptoArbitrosCtrl", function ($scope, $filter, $http) {

    $scope.titulo = 'Classificação';
    $scope.headerContent = 'Classificação';

    //const BASE_PATH = "http://localhost:9090/escalas";
    const BASE_PATH = "http://198.58.119.136:9090/escalas";

    $scope.escalas = [];
    $scope.escalaSelecionado = {};
    $scope.salvarEscala = {};
    $scope.arbitros = [{
            "nome": "ADEILDO GENOINO SANTOS",
            "funcao": "ARBITRO",
            "image": "ADEILDOGENOINOSANTOS"
        },
        {
            "nome": "ADRIANA FERNANDES DA SILVA SOUZA",
            "funcao": "REPRESENTANTE",
            "image": "ADRIANAFERNANDESDASILVASOUZA"
        },
        {
            "nome": "AGNOVALDO SILVA SANTOS",
            "funcao": "ARBITRO",
            "image": "AGNOVALDOSILVASANTOS"
        },
        {
            "nome": "ALEXANDRO RODRIGUES MARQUES",
            "funcao": "ARBITRO",
            "image": "ALEXANDRORODRIGUESMARQUES"
        },
        {
            "nome": "ALTAIR JOSE DE OLIVEIRA",
            "funcao": "ARBITRO",
            "image": "ALTAIRJOSEDEOLIVEIRA"
        },
        {
            "nome": "ANDRE LUIS PARREIRA",
            "funcao": "ARBITRO",
            "image": "ANDRELUISPARREIRA"
        },
        {
            "nome": "ARTHUR POLYCARDO SANTOS MACHADO",
            "funcao": "ARBITRO",
            "image": "ARTHURPOLYCARDOSANTOSMACHADO"
        },
        {
            "nome": "CARLOS EDUARDO PEREIRA ELIAS",
            "funcao": "ARBITRO",
            "image": "CARLOSEDUARDOPEREIRAELIAS"
        },
        {
            "nome": "CARLOS ROBERTO SOUZA",
            "funcao": "ARBITRO",
            "image": "CARLOSROBERTOSOUZA"
        },
        {
            "nome": "CIRO DE LIMA PEREIRA",
            "funcao": "REPRESENTANTE",
            "image": "CIRODELIMAPEREIRA"
        },
        {
            "nome": "CLAUDIO COIMBRA TEIXEIRA DE FARIA",
            "funcao": "ARBITRO",
            "image": "CLAUDIOCOIMBRATEIXEIRADEFARIA"
        },
        {
            "nome": "CLAUDIO FRANCISCO A. BARBOSA",
            "funcao": "ARBITRO",
            "image": "CLAUDIOFRANCISCOABARBOSA"
        },
        {
            "nome": "DANIEL SANTOS SANTANA",
            "funcao": "ARBITRO",
            "image": "DANIELSANTOSSANTANA"
        },
        {
            "nome": "EDER SEBASTIAO DE MORAIS",
            "funcao": "ARBITRO",
            "image": "EDERSEBASTIAODEMORAIS"
        },
        {
            "nome": "EDILBERTO MENDES",
            "funcao": "ARBITRO",
            "image": "EDILBERTOMENDES"
        },
        {
            "nome": "EDSON FERREIRA DA SILVA",
            "funcao": "ARBITRO",
            "image": "EDSONFERREIRADASILVA"
        },
        {
            "nome": "ELISANDRO SANTANA",
            "funcao": "ARBITRO",
            "image": "ELISANDROSANTANA"
        },
        {
            "nome": "ELISEU FELIX DA SILVA",
            "funcao": "ARBITRO",
            "image": "ELISEUFELIXDASILVA"
        },
        {
            "nome": "ELITON FRANCISCO DOS SANTOS",
            "funcao": "ARBITRO",
            "image": "ELITONFRANCISCODOSSANTOS"
        },
        {
            "nome": "ENILSON MACEDO GOMES",
            "funcao": "ARBITRO",
            "image": "ENILSONMACEDOGOMES"
        },
        {
            "nome": "ERILDO ALVES DE SOUZA",
            "funcao": "ARBITRO",
            "image": "ERILDOALVESDESOUZA"
        },
        {
            "nome": "FERNANDO HUMBERTO SILVA FONSECA",
            "funcao": "REPRESENTANTE",
            "image": "FERNANDOHUMBERTOSILVAFONSECA"
        },
        {
            "nome": "FLAVIO SILVA OLIVEIRA",
            "funcao": "ARBITRO",
            "image": "FLAVIOSILVAOLIVEIRA"
        },
        {
            "nome": "IGOR ALVES DOS SANTOS",
            "funcao": "ARBITRO",
            "image": "IGORALVESDOSSANTOS"
        },
        {
            "nome": "JOAO EURIPEDES SOUZA FILHO",
            "funcao": "ARBITRO",
            "image": "JOAOEURIPEDESSOUZAFILHO"
        },
        {
            "nome": "JOAO VICENTE ALVES",
            "funcao": "ARBITRO",
            "image": "JOAOVICENTEALVES"
        },
        {
            "nome": "JOELMA APARECIDA ARRUDA",
            "funcao": "REPRESENTANTE",
            "image": "JOELMAAPARECIDAARRUDA"
        },
        {
            "nome": "JOSE CARLOS GONÇALVES DA SILVA",
            "funcao": "ARBITRO",
            "image": "JOSECARLOSGONÇALVESDASILVA"
        },
        {
            "nome": "JOSE EDUARDO COSTA SANTOS",
            "funcao": "ARBITRO",
            "image": "JOSEEDUARDOCOSTASANTOS"
        },
        {
            "nome": "JOVAINE NEVES FERREIRA",
            "funcao": "ARBITRO",
            "image": "JOVAINENEVESFERREIRA"
        },
        {
            "nome": "JULIO CESAR GONZAGA",
            "funcao": "ARBITRO",
            "image": "JULIOCESARGONZAGA"
        },
        {
            "nome": "JUSCELINO CARNEIRO SANTANA",
            "funcao": "ARBITRO",
            "image": "JUSCELINOCARNEIROSANTANA"
        },
        {
            "nome": "LUCAS SILVERIO FARIA",
            "funcao": "ARBITRO",
            "image": "LUCASSILVERIOFARIA"
        },
        {
            "nome": "LUCIO DE SOUZA",
            "funcao": "ARBITRO",
            "image": "LUCIODESOUZA"
        },
        {
            "nome": "LUIS HUMBERTO ALVES LEAL",
            "funcao": "ARBITRO",
            "image": "LUISHUMBERTOALVESLEAL"
        },
        {
            "nome": "LUIZ GUSTAVO CRUZ BINDELLA",
            "funcao": "ARBITRO",
            "image": "LUIZGUSTAVOCRUZBINDELLA"
        },
        {
            "nome": "MARCEL MOREIRA",
            "funcao": "ARBITRO",
            "image": "MARCELMOREIRA"
        },
        {
            "nome": "MARCOS ANTONIO BORGES",
            "funcao": "ARBITRO",
            "image": "MARCOSANTONIOBORGES"
        },
        {
            "nome": "MARIO LILUELITON FERREIRA M. F. COELHO",
            "funcao": "ARBITRO",
            "image": "MARIOLILUELITONFERREIRAMFCOELHO"
        },
        {
            "nome": "MILTON OMAR CARDOSO",
            "funcao": "REPRESENTANTE",
            "image": "MILTONOMARCARDOSO"
        },
        {
            "nome": "NIGEL LOBATO BORGES",
            "funcao": "ARBITRO",
            "image": "NIGELLOBATOBORGES"
        },
        {
            "nome": "PATRICK SOUZA SANTOS",
            "funcao": "ARBITRO",
            "image": "PATRICKSOUZASANTOS"
        },
        {
            "nome": "PAULO SERGIO NUNES",
            "funcao": "ARBITRO",
            "image": "PAULOSERGIONUNES"
        },
        {
            "nome": "ROBERTT ALEXANDRE SEIXAS",
            "funcao": "ARBITRO",
            "image": "ROBERTTALEXANDRESEIXAS"
        },
        {
            "nome": "SANDRO ALVES PEREIRA",
            "funcao": "ARBITRO",
            "image": "SANDROALVESPEREIRA"
        },
        {
            "nome": "SEBASTIAO ERNESTO SANTOS",
            "funcao": "ARBITRO",
            "image": "SEBASTIAOERNESTOSANTOS"
        },
        {
            "nome": "SERGIO ALVES PEREIRA",
            "funcao": "ARBITRO",
            "image": "SERGIOALVESPEREIRA"
        },
        {
            "nome": "SILVIO ALVES GARCIA",
            "funcao": "REPRESENTANTE",
            "image": "SILVIOALVESGARCIA"
        },
        {
            "nome": "THIAGO ANDRADE DOS SANTOS",
            "funcao": "ARBITRO",
            "image": "THAIGOANDRADEDOSSANTOS"
        },
        {
            "nome": "UGLADISTON DE PAULA",
            "funcao": "ARBITRO",
            "image": "UGLADISTONDEPAULA"
        },
        {
            "nome": "UGLADISTON DE PAULA JUNIOR",
            "funcao": "ARBITRO",
            "image": "UGLADISTONDEPAULAJUNIOR"
        },
        {
            "nome": "VALDENI TEODORO DE OLIVEIRA",
            "funcao": "ARBITRO",
            "image": "VALDENITEODORODEOLIVEIRA"
        },
        {
            "nome": "VANDERLEI FERREIRA MEDINA",
            "funcao": "ARBITRO",
            "image": "VANDERLEIFERREIRAMEDINA"
        },
        {
            "nome": "VANDERLEY NUNES SILVA",
            "funcao": "ARBITRO",
            "image": "VANDERLEYNUNESSILVA"
        },
        {
            "nome": "WALLACE ALBERTO BORGES PENNA",
            "funcao": "ARBITRO",
            "image": "WALLACEALBERTOBORGESPENNA"
        },
        {
            "nome": "WENDOMAR TEODORO DE OLIVEIRA",
            "funcao": "ARBITRO",
            "image": "WENDOMARTEODORODEOLIVEIRA"
        },
        {
            "nome": "WILSON JOSE PAULINO",
            "funcao": "ARBITRO",
            "image": "WILSONJOSEPAULINO"
        }
    ];

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

    carregarEscalas();

});