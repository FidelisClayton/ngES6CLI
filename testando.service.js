class TestandoService {
    constructor(ServiceTeste,$http) {
        this.ServiceTeste = ServiceTeste; 
        this.$http = $http; 

    }
}

TestandoService.$inject = ['service.teste','$http'];

export default TestandoService;
