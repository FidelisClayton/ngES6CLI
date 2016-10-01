
export default class Clayton {
    constructor($scope,$http,TesteService) {
        this.$scope = $scope; 
        this.$http = $http; 
        this.TesteService = TesteService; 
 }
}

Clayton.$inject = ['$scope','$http','teste.service'];

