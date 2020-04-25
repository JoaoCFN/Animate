import Animate from "./Animate.js";

const card = document.querySelector(".card");
const h1 = document.querySelector("h1");
const animacao = new Animate(card);
animacao.setAnimationDown(300);
animacao.startAnimate();
animacao.setAnimationWrite(h1);

