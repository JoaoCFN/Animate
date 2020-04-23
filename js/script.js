import Animate from "./Animate.js";

const card = document.querySelector(".card");
const animacao = new Animate(card);
animacao.setAnimationDown(300);
animacao.startAnimate();

