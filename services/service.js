export class Service {
    constructor(){}

    getNumArrFromStr(str){
        return str.split('\n').map(Number)
    }
}