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