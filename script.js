const vermelho = document.getElementById('vermelho');
const verde = document.getElementById('verde');
const amarelo = document.getElementById('amarelo');
const azul = document.getElementById('azul');

const jogarMaquina = document.getElementById('jogarMaquina');
const verificar = document.getElementById('verificar');

// Lógica do jogo 

let vetjogador=[], vetmaq=[];

jogar();

vermelho.onclick = ()=>{
    setTimeout(()=>{
        vermelho.style.backgroundColor='#a52a2a';
     },500);
    vermelho.style.backgroundColor='#FA8072';
     vetjogador.push(1);
     console.log('Jogador ' + vetjogador);
}
verde.onclick = ()=>{

    setTimeout(()=>{
        verde.style.backgroundColor='#556b2f'
     },500);
     verde.style.backgroundColor='#7FFF00'
     vetjogador.push(2);
     console.log('Jogador ' + vetjogador);
}

amarelo.onclick = ()=>{

    setTimeout(()=>{
        amarelo.style.backgroundColor='#b8860b'
     },500);
     amarelo.style.backgroundColor='#FFFF00'
     vetjogador.push(3);
     console.log('Jogador ' + vetjogador);
}

azul.onclick = ()=>{

    setTimeout(()=>{
        azul.style.backgroundColor='#4169e1'
     },500);
     azul.style.backgroundColor='#00BFFF';
     vetjogador.push(4);
     console.log('Jogador ' + vetjogador);
}

function azulPisca(){
    setTimeout(()=>{
        azul.style.backgroundColor='#0000FF'
     },500);
     azul.style.backgroundColor='#00BFFF';
     vetjogador.push(4);
     console.log('Jogador ' + vetjogador);
}




jogarMaquina.onclick = ()=>{
    jogar();
    vetjogador=[];
};

function jogar(){
    vetmaq.push(Math.floor(Math.random() * 4 + 1));
    console.log('jogarMaquina '+ vetmaq);
}

////////////////////// solução 1 /////////////////
function verifygame(){
    const resp = vetmaq.map( function(elemento, indice, array){
        //console.log(indice);
        //console.log(array);
        if(vetjogador[indice]== elemento){
            return 1 ;
        }else{
            vetmaq=[];
            return 0;

        }
    });
    console.log('Teste de acerto = ' + resp);

}

////////////////////// solução 2 /////////////////
function verifygame2(){
    tamVet = vetmaq.length;
    let i = 0, resp;
    while (i < tamVet) {
        if (vetjogador[i] != vetmaq[i]) {
           resp=0;
           vetmaq=[];
           break;
        }else{
            resp=1;
        }
        i =+ 1;
     }
     console.log('Teste de acerto = ' + resp);
     vetjogador=[];

}

verificar.onclick=()=>{
    verifygame();
};