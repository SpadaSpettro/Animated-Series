var contenitoreImmagini = document.getElementsByClassName("contenitoreImmagini");
var contatore;
for (contatore = 0; contatore < contenitoreImmagini.length; contatore++) {
contenitoreImmagini[contatore].onclick = function(){
var panel = this.nextElementSibling;
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

function riferimento(idFieldset, idSerie){
document.getElementById(idFieldset).style.display='block';
var serie = document.getElementById(idSerie);
var serieRect = serie.getBoundingClientRect();
var absoluteSerieTop = serieRect.top + window.pageYOffset;
var scroll = absoluteSerieTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

var modal = document.getElementById('modalFlixGrab');
var immagine = document.getElementById('immagineFlixGrab');
var immagineModal = document.getElementById('immagine1');
immagine.onclick = function(){
modal.style.display = "block";
immagineModal.src = this.src;
}
var span = document.getElementsByClassName("x")[0];
span.onclick = function() {
modal.style.display = "none";
}

var modal1 = document.getElementById('modal1FlixGrab');
var immagine1 = document.getElementById('immagine1FlixGrab');
var immagineModal1 = document.getElementById('immagine2');
immagine1.onclick = function(){
modal1.style.display = "block";
immagineModal1.src = this.src;
}
var span1 = document.getElementsByClassName("x1")[0];
span1.onclick = function() {
modal1.style.display = "none";
var contenitoreImmagini = document.getElementsByClassName("contenitoreImmagini");
var contatore;
for (contatore = 0; contatore < contenitoreImmagini.length; contatore++) {
contenitoreImmagini[contatore].onclick = function(){
var panel = this.nextElementSibling;
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

function riferimento(idFieldset, idSerie){
document.getElementById(idFieldset).style.display='block';
var serie = document.getElementById(idSerie);
var serieRect = serie.getBoundingClientRect();
var absoluteSerieTop = serieRect.top + window.pageYOffset;
var scroll = absoluteSerieTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

var modal = document.getElementById('modalFlixGrab');
var immagine = document.getElementById('immagineFlixGrab');
var immagineModal = document.getElementById('immagine1');
immagine.onclick = function(){
modal.style.display = "block";
immagineModal.src = this.src;
}
var span = document.getElementsByClassName("x")[0];
span.onclick = function() {
modal.style.display = "none";
}

var modal1 = document.getElementById('modal1FlixGrab');
var immagine1 = document.getElementById('immagine1FlixGrab');
var immagineModal1 = document.getElementById('immagine2');
immagine1.onclick = function(){
modal1.style.display = "block";
immagineModal1.src = this.src;
}
var span1 = document.getElementsByClassName("x1")[0];
span1.onclick = function() {
modal1.style.display = "none";
}