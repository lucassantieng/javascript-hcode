class CalcController {

    constructor(){


        this._displayCalcEl = document.querySelector()
        this._displayCalc = "0";
        this._currentDate;
        this.initialize(); //toda vez que inicializa a calculadora eu vou executar esse método e selecionar objeto display, hora e data.
    }

    initialize(){
            /*let displayCalcEl = document.querySelector("#display"); //aqui estou selecionando meu objeto html e armazenando em uma variavel para poder realizar a manipulção nesse elemento
            let dateEl = document.querySelector("#data");
            let timeEl = document.querySelector("#hora");

            */  //todo esse código foi refatorado.

            displayCalcEl.innerHTML = "2706"; //aqui estou inserindo um valor exatamento no objeto selecionado
            dateEl.innerHTML = "05/06/2019";
            timeEl.innerHTML = "19:00";

            
    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get dataAtual(){
        return this._currentDate;
    }

    set dataAtual(valor){
        this._currentDate;
    }


    
}