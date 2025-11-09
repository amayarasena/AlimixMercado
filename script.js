// Selecionar botões
const btnAlimentos = document.getElementById("alimentos");
const btnFrutas = document.getElementById("frutas");
const btnLimpeza = document.getElementById("limpeza");
const btnOfertas = document.getElementById("ofertas");
const btnTrabalheConosco = document.getElementById("trabalheconosco");

// Selecionar seções
const secaoAlimentos = document.querySelector(".alimentos");
const secaoFrutas = document.querySelector(".frutas");
const secaoLimpeza = document.querySelector(".limpeza");
const secaoOfertas = document.querySelector(".ofertas");
const secaoTrabalhe = document.querySelector(".trabalhe-conosco");

// Função de scroll suave
function rolarPara(secao) {
    secao.scrollIntoView({ behavior: "smooth" });
}

// Eventos dos botões
btnAlimentos.addEventListener("click", () => rolarPara(secaoAlimentos));
btnFrutas.addEventListener("click", () => rolarPara(secaoFrutas));
btnLimpeza.addEventListener("click", () => rolarPara(secaoLimpeza));
btnOfertas.addEventListener("click", () => rolarPara(secaoOfertas));
btnTrabalheConosco.addEventListener("click", () => rolarPara(secaoTrabalhe));
