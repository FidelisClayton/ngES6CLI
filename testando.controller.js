class TestandoController {
    constructor(ServiceTeste) {
        this.ServiceTeste = ServiceTeste; 

    }
}

TestandoController.$inject = ['service.teste'];

export default TestandoController;
