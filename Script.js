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

function OnePunchMan(){
document.getElementById('O').style.display='block';
var onePunchMan = document.getElementById('One-Punch Man');
var onePunchManRect = onePunchMan.getBoundingClientRect();
var absoluteOnePunchManTop = onePunchManRect.top + window.pageYOffset;
var scroll = absoluteOnePunchManTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function Toradora(){
document.getElementById('T').style.display='block';
var toradora = document.getElementById('Toradora!');
var toradoraRect = toradora.getBoundingClientRect();
var absoluteToradoraTop = toradoraRect.top + window.pageYOffset;
var scroll = absoluteToradoraTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function Another(){
document.getElementById('A').style.display='block';
var another = document.getElementById('Another');
var anotherRect = another.getBoundingClientRect();
var absoluteAnotherTop = anotherRect.top + window.pageYOffset;
var scroll = absoluteAnotherTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function EromangaSensei(){
document.getElementById('E').style.display='block';
var eromangaSensei = document.getElementById('Eromanga-sensei');
var eromangaSenseiRect = eromangaSensei.getBoundingClientRect();
var absoluteEromangaSenseiTop = eromangaSenseiRect.top + window.pageYOffset;
var scroll = absoluteEromangaSenseiTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function AnoHana(){
document.getElementById('A').style.display='block';
var anoHana = document.getElementById('Ano Hana');
var anoHanaRect = anoHana.getBoundingClientRect();
var absoluteAnoHanaTop = anoHanaRect.top + window.pageYOffset;
var scroll = absoluteAnoHanaTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function AbsoluteDuo(){
document.getElementById('A').style.display='block';
var absoluteDuo = document.getElementById('Absolute Duo');
var absoluteDuoRect = absoluteDuo.getBoundingClientRect();
var absoluteAbsoluteDuoTop = absoluteDuoRect.top + window.pageYOffset;
var scroll = absoluteAbsoluteDuoTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function AooniTheBlueMonster(){
document.getElementById('A').style.display='block';
var aooniTheBlueMonster = document.getElementById('Aooni The Blue Monster');
var aooniTheBlueMonsterRect = aooniTheBlueMonster.getBoundingClientRect();
var absoluteAooniTheBlueMonsterTop = aooniTheBlueMonsterRect.top + window.pageYOffset;
var scroll = absoluteAooniTheBlueMonsterTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function HighschoolOfTheDead(){
document.getElementById('H').style.display='block';
var highschoolOfTheDead = document.getElementById('Highschool of the Dead');
var highschoolOfTheDeadRect = highschoolOfTheDead.getBoundingClientRect();
var absoluteHighschoolOfTheDeadTop = highschoolOfTheDeadRect.top + window.pageYOffset;
var scroll = absoluteHighschoolOfTheDeadTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function KissXsis(){
document.getElementById('K').style.display='block';
var kissXsis = document.getElementById('KissxSis');
var kissXsisRect = kissXsis.getBoundingClientRect();
var absoluteKissXsisTop = kissXsisRect.top + window.pageYOffset;
var scroll = absoluteKissXsisTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function LattaccoDeiGiganti(){
document.getElementById('L').style.display='block';
var lattaccoDeiGiganti = document.getElementById("L'attacco dei giganti");
var lattaccoDeiGigantiRect = lattaccoDeiGiganti.getBoundingClientRect();
var absoluteLattaccoDeiGigantiTop = lattaccoDeiGigantiRect.top + window.pageYOffset;
var scroll = absoluteLattaccoDeiGigantiTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function TokyoGhoul(){
document.getElementById('T').style.display='block';
var tokyoGhoul = document.getElementById('Tokyo Ghoul');
var tokyoGhoulRect = tokyoGhoul.getBoundingClientRect();
var absoluteTokyoGhoulTop = tokyoGhoulRect.top + window.pageYOffset;
var scroll = absoluteTokyoGhoulTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function TokyoGhoulVa(){
document.getElementById('T').style.display='block';
var tokyoGhoulVa = document.getElementById('Tokyo Ghoul vA');
var tokyoGhoulVaRect = tokyoGhoulVa.getBoundingClientRect();
var absoluteTokyoGhoulVaTop = tokyoGhoulVaRect.top + window.pageYOffset;
var scroll = absoluteTokyoGhoulVaTop - (window.innerHeight / 1.5);
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

function SteinsGate(){
document.getElementById('S').style.display='block';
var steinsGate = document.getElementById('Steins;Gate');
var steinsGateRect = steinsGate.getBoundingClientRect();
var absoluteSteinsGateTop = steinsGateRect.top + window.pageYOffset;
var scroll = absoluteSteinsGateTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function Nisekoi(){
document.getElementById('N').style.display='block';
var nisekoi = document.getElementById('Nisekoi');
var nisekoiRect = nisekoi.getBoundingClientRect();
var absoluteNisekoiTop = nisekoiRect.top + window.pageYOffset;
var scroll = absoluteNisekoiTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function NisekoiDue(){
document.getElementById('N').style.display='block';
var nisekoiDue = document.getElementById('Nisekoi:');
var nisekoiDueRect = nisekoiDue.getBoundingClientRect();
var absoluteNisekoiDueTop = nisekoiDueRect.top + window.pageYOffset;
var scroll = absoluteNisekoiDueTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function ClockworkPlanet(){
document.getElementById('C').style.display='block';
var clockworkPlanet = document.getElementById('Clockwork Planet');
var clockworkPlanetRect = clockworkPlanet.getBoundingClientRect();
var absoluteClockworkPlanetTop = clockworkPlanetRect.top + window.pageYOffset;
var scroll = absoluteClockworkPlanetTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function SukaSuka(){
document.getElementById('C').style.display='block';
var sukaSuka = document.getElementById('SukaSuka');
var sukaSukaRect = sukaSuka.getBoundingClientRect();
var absoluteSukaSukaTop = sukaSukaRect.top + window.pageYOffset;
var scroll = absoluteSukaSukaTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}