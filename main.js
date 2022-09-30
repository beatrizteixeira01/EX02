//Beatriz Teixeira exercicio II WEB DESIGN II 

console.log("it´s working");
//encontra o título no documento (h1)
let titulo = document.querySelector("h1");

//define a função que muda o (h1) e o tempo (2s)
 setTimeout(titulochange, 10000);

//muda o título do documento (h1) através de um prompt
function titulochange() {
titulo.innerText = prompt("You get to choose the name of Heisenberg´s page What´s it gonna be? ");
}

//acrescentar novo elemento ; definir sources e atributos
let hank = document.createElement("IMG");
hank.setAttribute("src","IMG/hank.jpg");
hank.setAttribute("width", "150");
hank.setAttribute("height", "auto");

// acrescentar a imagem no final do aside após x segundos
setTimeout(oihank, 3000);

function oihank(){
let xim = document.querySelector("aside");
xim.appendChild(hank);
}

// variável para mudar cor da secção II (mais fácil em css, mas para testar)
const hein = document.getElementById("HEIS");

//função mouse over e mouse out para mudar a cor e voltar à original
hein.addEventListener('mouseover', 
function handleMouseOver() {
    HEIS.style.color = 'black';
});

//quando o rato sai volta á cor normal
hein.addEventListener("mouseout", function handleMouseOut() {
    HEIS.style.color = '#FAFAFF';
});

//scroll para baixo
let roll;

 function down() {
    scrollBy(0, 5);
}

roll = setInterval(down,10);

//parar scroll automático quando carregar no main
let parar = document.querySelector('main');

parar.onclick = function(){
clearInterval(roll);
};


// little animation of variable font in css (h2) :)