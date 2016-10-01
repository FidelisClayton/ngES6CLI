
class Home {
    constructor($scope,$http,TesteService) {
        this.$scope = $scope; 
        this.$http = $http; 
        this.TesteService = TesteService; 

    }
}

Home.$inject = ['$scope','$http','teste.service'];

export default Home;
