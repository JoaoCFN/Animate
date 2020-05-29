# Animate
Classe em JavaScript feita para facilitar o trabalho com animações básicas em HTML e CSS.

## Introdução
Para a classe executar as animações, você não precisa manipular nada do seu CSS. Dentro do próprio script, as regras CSS para as animações já estão configuradas.

## Como começar
Para usar o script, você deve adicioná-lo a pasta do seu projeto e seguir os passos abaixo:
 
  1. Como essa classe é um módulo, para você conseguir utilizá-la em seu projeto precisará utilizar o import do JavaScript. 
     Esse recurso está presente na linguagem desde o ES2016. 
     
     **Você pode ler mais sobre na documentação da MDN: [Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import). :smile: :+1:**
     
     Ou seja, adicione o `type="module"` na tag HTML do script que você irá importar a classe Animate.
     
     `<script type="module" src="js/exemplo.js"></script>`
     
 2. Agora é seu script já está pronto para receber imports. Seguindo o exemplo acima, dentro do nosso arquivo `exemplo.js` vamos importar a classe animate.
 
    `import Animate from "Animate.js";`
    
3. Pronto! Agora você já pode instanciar a classe Animate em algum objeto do seu script e utilizar suas funcionalidades :v:

## Funcionamento

 A animate trabalha com uma ideia simples. Basta capturar o elemento que deseja animar, setar e iniciar a animação.

 ### Exemplo inicial
   #### HTML

       <div class="card"></div>

   #### JS 
       import Animate from "../Animate.js";

       (function anima_card(){
           /* definindo var que recebe a classe */
           const animacao = new Animate();
           const card = document.querySelector(".card");
           /* setando animação passando o elemento e o deslocamento em pixels*/
           animacao.setAnimationRight(card, 200);
           window.addEventListener("load", () => {
               /* iniciando animação ao carregar a página */
               animacao.startAnimate(card);
           })
       })(); 

   Como descrito no exemplo acima, após instanciar o objeto animação e capturar o elemento que será animado, você precisará apenas setar a animação de sua preferência. Neste caso usamos o método `setAnimationRight()`. Outra observação muito importante para fazer com que a animação rode é a presença do Event Listener de load na página. Assim toda vez que a página for carregada, o método `startAnimate() é acionado`. Isso deve ser obrigatório no seu código. :wink:

 #### Lista de métodos :page_facing_up:

 **Obrigatório: recebe o elemento e incia a animação do mesmo :fire:**

 `startAnimate(element, time = 1)`

 **Unidirecionais: recebem o elemento a ser animado e valor do deslocamento em pixels :star:**

 `setAnimationUp(element, value)`

 `setAnimationDown(element, value)`

 `setAnimationRight(element, value)`

 `setAnimationLeft(element, value)` 

 **MultiDirecionais: recebe o elemento a ser animado e os valores de deslocamento em pixels :star:**

 `setCustomAnimation(element, x, y, z = 0)`

 **De escrita: recebe o texto a ser animado e o escreve na tela :star:**

 `setAnimationWrite(element)`

 **De opacidade: recebe o elemento a ser animado e faz a transição na opacidade :star:**

 `setAnimationOpacity(element)`


