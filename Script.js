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

function OnePunchMan(){
document.getElementById('O').style.display='block';
let onePunchMan = document.getElementById('One-Punch Man');
let onePunchManRect = onePunchMan.getBoundingClientRect();
let absoluteOnePunchManTop = onePunchManRect.top + window.pageYOffset;
let scroll = absoluteOnePunchManTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function Toradora(){
document.getElementById('T').style.display='block';
let toradora = document.getElementById('Toradora!');
let toradoraRect = toradora.getBoundingClientRect();
let absoluteToradoraTop = toradoraRect.top + window.pageYOffset;
let scroll = absoluteToradoraTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function Another(){
document.getElementById('A').style.display='block';
let another = document.getElementById('Another');
let anotherRect = another.getBoundingClientRect();
let absoluteAnotherTop = anotherRect.top + window.pageYOffset;
let scroll = absoluteAnotherTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function EromangaSensei(){
document.getElementById('E').style.display='block';
let eromangaSensei = document.getElementById('Eromanga-sensei');
let eromangaSenseiRect = eromangaSensei.getBoundingClientRect();
let absoluteEromangaSenseiTop = eromangaSenseiRect.top + window.pageYOffset;
let scroll = absoluteEromangaSenseiTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function AnoHana(){
document.getElementById('A').style.display='block';
let anoHana = document.getElementById('Ano Hana');
let anoHanaRect = anoHana.getBoundingClientRect();
let absoluteAnoHanaTop = anoHanaRect.top + window.pageYOffset;
let scroll = absoluteAnoHanaTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function AbsoluteDuo(){
document.getElementById('A').style.display='block';
let absoluteDuo = document.getElementById('Absolute Duo');
let absoluteDuoRect = absoluteDuo.getBoundingClientRect();
let absoluteAbsoluteDuoTop = absoluteDuoRect.top + window.pageYOffset;
let scroll = absoluteAbsoluteDuoTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function AooniTheBlueMonster(){
document.getElementById('A').style.display='block';
let aooniTheBlueMonster = document.getElementById('Aooni The Blue Monster');
let aooniTheBlueMonsterRect = aooniTheBlueMonster.getBoundingClientRect();
let absoluteAooniTheBlueMonsterTop = aooniTheBlueMonsterRect.top + window.pageYOffset;
let scroll = absoluteAooniTheBlueMonsterTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function HighschoolOfTheDead(){
document.getElementById('H').style.display='block';
let highschoolOfTheDead = document.getElementById('Highschool of the Dead');
let highschoolOfTheDeadRect = highschoolOfTheDead.getBoundingClientRect();
let absoluteHighschoolOfTheDeadTop = highschoolOfTheDeadRect.top + window.pageYOffset;
let scroll = absoluteHighschoolOfTheDeadTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function KissXsis(){
document.getElementById('K').style.display='block';
let kissXsis = document.getElementById('KissxSis');
let kissXsisRect = kissXsis.getBoundingClientRect();
let absoluteKissXsisTop = kissXsisRect.top + window.pageYOffset;
let scroll = absoluteKissXsisTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function LattaccoDeiGiganti(){
document.getElementById('L').style.display='block';
let lattaccoDeiGiganti = document.getElementById("L'attacco dei giganti");
let lattaccoDeiGigantiRect = lattaccoDeiGiganti.getBoundingClientRect();
let absoluteLattaccoDeiGigantiTop = lattaccoDeiGigantiRect.top + window.pageYOffset;
let scroll = absoluteLattaccoDeiGigantiTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function TokyoGhoul(){
document.getElementById('T').style.display='block';
let tokyoGhoul = document.getElementById('Tokyo Ghoul');
let tokyoGhoulRect = tokyoGhoul.getBoundingClientRect();
let absoluteTokyoGhoulTop = tokyoGhoulRect.top + window.pageYOffset;
let scroll = absoluteTokyoGhoulTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function TokyoGhoulVa(){
document.getElementById('T').style.display='block';
let tokyoGhoulVa = document.getElementById('Tokyo Ghoul vA');
let tokyoGhoulVaRect = tokyoGhoulVa.getBoundingClientRect();
let absoluteTokyoGhoulVaTop = tokyoGhoulVaRect.top + window.pageYOffset;
let scroll = absoluteTokyoGhoulVaTop - (window.innerHeight / 1.5);
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
}

function SteinsGate(){
document.getElementById('S').style.display='block';
let steinsGate = document.getElementById('Steins;Gate');
let steinsGateRect = steinsGate.getBoundingClientRect();
let absoluteSteinsGateTop = steinsGateRect.top + window.pageYOffset;
let scroll = absoluteSteinsGateTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function Nisekoi(){
document.getElementById('N').style.display='block';
let nisekoi = document.getElementById('Nisekoi');
let nisekoiRect = nisekoi.getBoundingClientRect();
let absoluteNisekoiTop = nisekoiRect.top + window.pageYOffset;
let scroll = absoluteNisekoiTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function NisekoiDue(){
document.getElementById('N').style.display='block';
let nisekoiDue = document.getElementById('Nisekoi:');
let nisekoiDueRect = nisekoiDue.getBoundingClientRect();
let absoluteNisekoiDueTop = nisekoiDueRect.top + window.pageYOffset;
let scroll = absoluteNisekoiDueTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function ClockworkPlanet(){
document.getElementById('C').style.display='block';
let clockworkPlanet = document.getElementById('Clockwork Planet');
let clockworkPlanetRect = clockworkPlanet.getBoundingClientRect();
let absoluteClockworkPlanetTop = clockworkPlanetRect.top + window.pageYOffset;
let scroll = absoluteClockworkPlanetTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}

function SukaSuka(){
document.getElementById('C').style.display='block';
let sukaSuka = document.getElementById('SukaSuka');
let sukaSukaRect = sukaSuka.getBoundingClientRect();
let absoluteSukaSukaTop = sukaSukaRect.top + window.pageYOffset;
let scroll = absoluteSukaSukaTop - (window.innerHeight / 1.5);
window.scrollTo(0, scroll);
}
