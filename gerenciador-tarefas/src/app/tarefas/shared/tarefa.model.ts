export class Tarefa{

    constructor(
        // '?' = atributos opcionais
        public id?: number,
        public nome?: string,
        public concluida?: boolean 
    ) { }

}