
function tocaSom(idSomElemento){
    document.querySelector(idSomElemento).play();
}

//criando a lista com todas as teclas -> 9 teclas
const listaTeclas = document.querySelectorAll('.tecla');


for(let contador = 0; contador < listaTeclas.length; contador++) {

    const tecla = listaTeclas[contador];
    const som = tecla.classList[1];

    //template string
    const id = `#som_${som}`;

    tecla.onclick = function(){
        tocaSom(id);
    }
}