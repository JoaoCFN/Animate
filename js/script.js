import Animate from "./Animate.js";

const card = document.querySelector(".card");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

const animacao = new Animate();
animacao.setAnimationDown(card, 150);
animacao.startAnimate(card);

animacao.setAnimationWrite(h2);

animacao.setAnimationOpacity(h2);
animacao.startAnimate(h2);

