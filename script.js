const rgbText = document.getElementById("rgb-text");
const body = document.querySelector("body");
const buttonStart = document.getElementById("buttonStart");
const scoreText = document.getElementById("score");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");
const div5 = document.getElementById("div5");
const div6 = document.getElementById("div6");
const divs = [div1,div2,div3,div4,div5,div6];
let intervalo;
let jogoAtivo = false;
let score = 0;
let c1;
let c2;
let c3;


function randomRgb(){
    return Math.floor(Math.random() * 256);
}

function randomDiv(){
    let r = Math.floor(Math.random() * 6);
    console.log(divs[r]);
    return divs[r]; 
}

function start(){
    divs.map((e,i)=>{
        divs[i].innerText = "";
    })
    if(typeof(divEscolhida) != "undefined"){
        divEscolhida.style.border = "1px solid black";
        body.style.backgroundColor = "white";
    }
    
    buttonStart.style.opacity = 1;
    clearInterval(intervalo);
    jogoAtivo = true;
    buttonStart.disabled = false;
    rgbText.innerText = `What Color is this -> RGB(${c1 = randomRgb()}, ${c2 = randomRgb()}, ${c3 = randomRgb()})`;
    
    divEscolhida = randomDiv();

    for(let i = 0; i < divs.length; i++){
        if(divs[i] == divEscolhida){
            divs[i].style.backgroundColor = `rgb(${c1},${c2},${c3})`
        } else{
            divs[i].style.backgroundColor = `rgb(${randomRgb()}, ${randomRgb()}, ${randomRgb()})`
        }
    }

}

function verifyWinner(element){
    if(jogoAtivo){
        if(element == divEscolhida){
            divEscolhida.style.border = "5px solid white";
            body.style.backgroundColor = "rgb(33, 202, 33)";
            score++
            scoreText.innerText = "Score: " + score
        } else{
            divEscolhida.style.border = "5px solid white";
            body.style.backgroundColor = "rgb(181, 29, 29)";
        }
        jogoAtivo = false;
        buttonStart.disabled = true;
        buttonStart.style.opacity = 0.3;
        intervalo = setInterval(start, 5000);
    }
}


