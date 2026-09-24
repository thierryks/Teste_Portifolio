const temaBtn = document.querySelector("#tema-btn");
 
temaBtn.addEventListener("click", () => {
document.body.classList.toggle("light-mode");
});
 
const formulario =
document.querySelector("#formulario");
 
const mensagem =
document.querySelector("#mensagem");
 
formulario.addEventListener("submit", (e) => {
e.preventDefault();
 
mensagem.textContent =
"Mensagem enviada com sucesso!";
 
formulario.reset();
});

const texto = [
"Desenvolvedor Front-End",
"Estudante de Programação",
"Criador de Interfaces Modernas",
"Apaixonado por Tecnologia"
];
 
let textoIndex = 0;
let caractereIndex = 0;
 
const elemento = document.getElementById("typing");
 
function digitar() {
if (caractereIndex < texto[textoIndex].length) {
elemento.textContent += texto[textoIndex].charAt(caractereIndex);
caractereIndex++;
 
setTimeout(digitar, 80);
} else {
setTimeout(apagar, 2000);
}
}
 
function apagar() {
if (caractereIndex > 0) {
elemento.textContent =
texto[textoIndex].substring(0, caractereIndex - 1);
 
caractereIndex--;
 
setTimeout(apagar, 40);
} else {
textoIndex++;
 
if (textoIndex >= texto.length) {
textoIndex = 0;
}
 
setTimeout(digitar, 300);
}
}
 
digitar();