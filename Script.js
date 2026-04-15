let contenitoreImmagini = document.getElementsByClassName("contenitoreImmagini");
let contatore;
for (contatore = 0; contatore < contenitoreImmagini.length; contatore++) {
contenitoreImmagini[contatore].onclick = function(){
let panel = this.nextElementSibling;
if (panel.style.display === "block") {
panel.style.display = "none";
} else {
panel.style.display = "block";
}
}
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
document.getElementById("tornaInCima").style.display = "block";
} else {
document.getElementById("tornaInCima").style.display = "none";
}
}
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

// Funzione per mostrare il fieldset e scorrere alla posizione della serie
function riferimento(idFieldset, idSerie){
document.getElementById(idFieldset).style.display='block';
let serie = document.getElementById(idSerie);
let serieRect = serie.getBoundingClientRect();
let absoluteSerieTop = serieRect.top + window.pageYOffset;
let scroll = absoluteSerieTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

let modal = document.getElementById('modalFlixGrab');
let immagine = document.getElementById('immagineFlixGrab');
let immagineModal = document.getElementById('immagine1');
immagine.onclick = function(){
modal.style.display = "block";
immagineModal.src = this.src;
}
let span = document.getElementsByClassName("x")[0];
span.onclick = function() {
modal.style.display = "none";
}

let modal1 = document.getElementById('modal1FlixGrab');
let immagine1 = document.getElementById('immagine1FlixGrab');
let immagineModal1 = document.getElementById('immagine2');
immagine1.onclick = function(){
modal1.style.display = "block";
immagineModal1.src = this.src;
}
let span1 = document.getElementsByClassName("x1")[0];
span1.onclick = function() {
modal1.style.display = "none";

let contenitoreImmagini = document.getElementsByClassName("contenitoreImmagini");
let contatore;
for (contatore = 0; contatore < contenitoreImmagini.length; contatore++) {
   contenitoreImmagini[contatore].onclick = function(){
let panel = this.nextElementSibling;
if (panel.style.display === "block") {
panel.style.display = "none";
} else {
panel.style.display = "block";
}
}
}
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
document.getElementById("tornaInCima").style.display = "block";
} else {
document.getElementById("tornaInCima").style.display = "none";
}
}
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

function riferimento(idFieldset, idSerie){
document.getElementById(idFieldset).style.display='block';
let serie = document.getElementById(idSerie);
let serieRect = serie.getBoundingClientRect();
let absoluteSerieTop = serieRect.top + window.pageYOffset;
let scroll = absoluteSerieTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function transizione(elemento){
   elemento.style.display = "none";
   document.getElementById("transizioneFine").style.display = "block";
}