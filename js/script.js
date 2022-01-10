//criação das divs
function inicio() {
    $("#inicio").hide();
    $("#fundo").append("<div id='jogador' class='anima1'></div");
    $("#fundo").append("<div id='inimigo1' class ='anima2>'</div");
    $("#fundo").append("<div id='inimigo2' class='anima3'></div");
}
//timer para o fundo
var game = {};
game.timer = setInterval(loop, 30);
function loop(){
    movefundo();
}

function movefundo(){
    esquerda = parseInt($("#fundo").css("background-position"));
    $("#fundo").css("background-position",esquerda-1);
}

var press  = {
    W: 87,
    S: 63,
    D: 68
}
//checagem de teclas
pressativo = [];
$(document).keydown(function(e){
    pressativo[e.which] = true;
});

$(document).keyup(function(e){
    pressativo[e.which] = false;
});

//move o jogador, por algum motivo nao ta funcionando
function movejogo(){
    if (pressativo [TECLA.W]){
        var topo = parseInt($("jogador").css("top"));
        $("#jogador").css("top",topo-10);
        //checagem da posicao para nao ultrapassar a div
        if (topo<=0){
        $("#jogador").css("top",topo+10);
    }}
    if (pressativo [TECLA.D]){


}
if (pressativo [TECLA.S]){
       var topo = parseInt($("jogador").css("top"));
       $("#jogador").css("top", topo+10);
       if (topo<=434){
        $("#jogador").css("top",topo-10);
}}}
