var dptoArbitros = angular.module("dptoArbitros", []);
dptoArbitros.controller("dptoArbitrosCtrl", function ($scope, $filter, $http) {

    $scope.titulo = 'Classificação';
    $scope.headerContent = 'Classificação';

    $scope.escalas = [
        {
            nroEscala: 'Escala n° 0019/2018',
            dataInicio: '28/04/2018',
            dataFim: '29/04/2018',
            escala: 'https://drive.google.com/file/d/1BlRQOnLAjAcpXnKleONleaN97Bj5dWv9/view'
        },
        {
            nroEscala: 'Escala n° 0020/2018',
            dataInicio: '01/05/2018',
            dataFim: '01/05/2018',
            escala: 'https://drive.google.com/file/d/1BlRQOnLAjAcpXnKleONleaN97Bj5dWv9/view'
        },
    ];

});