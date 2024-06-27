//variaveis globais


let quantidade = document.getElementById("qtd");

let estoquePista = document.getElementById("qtd-pista");


let estoqueInferior = document.getElementById("qtd-inferior");
let estoqueInferiorInt = parseInt(estoqueInferior.textContent, 10);

let estoqueSuperior = document.getElementById("qtd-superior");
let estoqueSuperiorInt = parseInt(estoqueSuperior.textContent, 10);


console.log(estoquePista.textContent);

//função comprar

function comprar() {

    
    let opcoes = document.getElementById("tipo-ingresso");
    //quando comprar, verificar opção do section

    if (opcoes.value == "pista") {

        let estoquePistaInt = parseInt(estoquePista.textContent, 10);
       
        if (estoquePistaInt == 0) {
            alert("Ingressos esgotados");
        }

        if (quantidade.value > estoquePistaInt) {
            alert("Quantidade em estoque insuficiente");
            estoquePista.textContent;
        } else {

        estoquePista.textContent = estoquePista.textContent - quantidade.value;

        }
        
        if (estoquePista < 0) {
            estoquePista.textContent = 0
        }
    }

        if (opcoes.value == "inferior") {
            console.log("WIP")
        }
        if (opcoes.value == "superior") {
            console.log("WIP")
        }
        //quando comprar, verificar value do input

        console.log(quantidade.value);

        //diminui numeração de ingressos conforme dados acima

}



