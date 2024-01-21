//Criando variavel para usar lib de prompt
const prompt = require('prompt-sync')();

//Criando variaveis para obter os valores desejados para Nome e XP do heroi
let xpDoHeroi = prompt("Qual o nivel do seu heroi? ");
let nomeDoHeroi = prompt("Qual o nome do seu heroi? ");

//Estrutura de tomada de decisao baseado nos parametros passados no exercicio
    if(xpDoHeroi <= 1000) {
    console.log ("O herói de nome " + nomeDoHeroi + " é do nível Ferro.🪃");
    } 
    else if(xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
        console.log("O herói de nome " + nomeDoHeroi + " está no nível Bronze.🔫");
    }
    else if(xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
        console.log("O herói de nome " + nomeDoHeroi + " é do nível Prata.🏹");
    }
    else if(xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {
        console.log("O herói de nome " + nomeDoHeroi + " é do nível Ouro.🗡");
    }
    else if(xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
        console.log("O herói de nome " + nomeDoHeroi + " é do nível Platina.⚔");
    }
    else if(xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
        console.log("O herói de nome " + nomeDoHeroi + " é do nível Ascendente.🧙");
    }
    else if(xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
        console.log("O herói de nome " + nomeDoHeroi + " é do nível Imortal.🧙‍♂️");
    }
    else {
        console.log("O herói de nome " + nomeDoHeroi + " é do nível Radiante.👑");
    }

    