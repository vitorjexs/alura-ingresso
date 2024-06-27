//variaveis globais
let quantidade = document.getElementById("qtd");

let estoquePista = document.getElementById("qtd-pista");

let estoqueInferior = document.getElementById("qtd-inferior");

let estoqueSuperior = document.getElementById("qtd-superior");

//função comprar
function comprar() {

    let opcoes = document.getElementById("tipo-ingresso");

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
        let estoqueInferiorInt = parseInt(estoqueInferior.textContent, 10);

        if (estoqueInferiorInt == 0) {
            alert("Ingressos esgotados");
        }

        if (quantidade.value > estoqueInferiorInt) {
            alert("Quantidade em estoque insuficiente");
            estoqueInferior.textContent;
        } else {
            estoqueInferior.textContent = estoqueInferior.textContent - quantidade.value;
        }

        if (estoqueInferior < 0) {
            estoqueInferior.textContent = 0
        }

    }

    if (opcoes.value == "superior") {
        
        let estoqueSuperiorInt = parseInt(estoqueSuperior.textContent, 10);

        if (estoqueSuperiorInt == 0) {
            alert("Ingressos esgotados");
        }

        if (quantidade.value > estoqueSuperiorInt) {
            alert("Quantidade em estoque insuficiente");
            estoqueSuperior.textContent;
        } else {
            estoqueSuperior.textContent = estoqueSuperior.textContent - quantidade.value;
        }

        if (estoqueSuperior < 0) {
            estoqueSuperior.textContent = 0
        }

    }

}



