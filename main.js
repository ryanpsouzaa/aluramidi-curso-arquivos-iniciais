alert("Olá Mundo");
document.querySelector('.tecla_pom');

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
};

document.querySelector('.tecla_clap').onclick = tocaSomClap;